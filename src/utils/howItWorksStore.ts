import { useState, useEffect } from 'react';
import { howItWorksData, ProjectWorkflows, WorkflowStep } from '../data/howItWorksData';
import { fetchNeonSteps, upsertNeonStep, deleteNeonStep } from './neonClient';

const STORAGE_KEY = 'agency_how_it_works_v2';
const EVENT_NAME = 'howitworks_data_updated';

// Helper to get stored or default data
export const getHowItWorksData = (): Record<'bakery' | 'travel', ProjectWorkflows> => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Validate basic structure
      if (parsed.bakery && parsed.travel) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to read howItWorksData from localStorage', e);
  }
  return howItWorksData;
};

// Helper to save data to localStorage and trigger live local sync
export const saveHowItWorksData = (data: Record<'bakery' | 'travel', ProjectWorkflows>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (e) {
    console.error('Failed to save howItWorksData to localStorage', e);
  }
};

// Reset store back to initial default data
export const resetHowItWorksData = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT_NAME));
};

// Custom React hook to listen for live data changes & auto-sync with Neon DB
export const useHowItWorksStore = () => {
  const [data, setData] = useState<Record<'bakery' | 'travel', ProjectWorkflows>>(getHowItWorksData);

  // Sync with Neon Postgres on initial hook mount
  useEffect(() => {
    let isMounted = true;

    async function syncWithNeon() {
      const dbData = await fetchNeonSteps();
      if (dbData && isMounted) {
        saveHowItWorksData(dbData);
        setData(dbData);
      }
    }

    syncWithNeon();

    return () => {
      isMounted = false;
    };
  }, []);

  // Listen for real-time window events
  useEffect(() => {
    const handleUpdate = () => {
      setData(getHowItWorksData());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const updateStep = (
    projectId: 'bakery' | 'travel',
    side: 'customer' | 'admin',
    stepId: string,
    updatedStep: Partial<WorkflowStep>
  ) => {
    const currentData = getHowItWorksData();
    const flowKey = side === 'customer' ? 'customerFlow' : 'adminFlow';
    const steps = currentData[projectId][flowKey].steps;

    let targetStep: WorkflowStep | null = null;
    const newSteps = steps.map((s) => {
      if (s.id === stepId) {
        targetStep = { ...s, ...updatedStep };
        return targetStep;
      }
      return s;
    });

    const newData: Record<'bakery' | 'travel', ProjectWorkflows> = {
      ...currentData,
      [projectId]: {
        ...currentData[projectId],
        [flowKey]: {
          ...currentData[projectId][flowKey],
          steps: newSteps,
        },
      },
    };

    // Save locally first for 0ms instant UI reaction
    saveHowItWorksData(newData);

    // Sync to Neon Postgres in background
    if (targetStep) {
      upsertNeonStep(projectId, side, targetStep);
    }
  };

  const addStep = (
    projectId: 'bakery' | 'travel',
    side: 'customer' | 'admin',
    newStep: WorkflowStep
  ) => {
    const currentData = getHowItWorksData();
    const flowKey = side === 'customer' ? 'customerFlow' : 'adminFlow';
    const steps = currentData[projectId][flowKey].steps;

    const newData: Record<'bakery' | 'travel', ProjectWorkflows> = {
      ...currentData,
      [projectId]: {
        ...currentData[projectId],
        [flowKey]: {
          ...currentData[projectId][flowKey],
          steps: [...steps, newStep],
        },
      },
    };

    // Save locally first for 0ms instant UI reaction
    saveHowItWorksData(newData);

    // Sync to Neon Postgres in background
    upsertNeonStep(projectId, side, newStep);
  };

  const deleteStep = (
    projectId: 'bakery' | 'travel',
    side: 'customer' | 'admin',
    stepId: string
  ) => {
    const currentData = getHowItWorksData();
    const flowKey = side === 'customer' ? 'customerFlow' : 'adminFlow';
    const steps = currentData[projectId][flowKey].steps;

    const newData: Record<'bakery' | 'travel', ProjectWorkflows> = {
      ...currentData,
      [projectId]: {
        ...currentData[projectId],
        [flowKey]: {
          ...currentData[projectId][flowKey],
          steps: steps.filter((s) => s.id !== stepId),
        },
      },
    };

    // Save locally first for 0ms instant UI reaction
    saveHowItWorksData(newData);

    // Sync deletion to Neon Postgres in background
    deleteNeonStep(stepId);
  };

  return {
    data,
    updateStep,
    addStep,
    deleteStep,
    resetData: resetHowItWorksData,
  };
};
