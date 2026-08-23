import { useState, useEffect } from 'react';
import { howItWorksData, ProjectWorkflows, WorkflowStep } from '../data/howItWorksData';

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

// Helper to save data and trigger live sync
export const saveHowItWorksData = (data: Record<'bakery' | 'travel', ProjectWorkflows>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(EVENT_NAME));
  } catch (e) {
    console.error('Failed to save howItWorksData to localStorage', e);
  }
};

// Reset store back to initial data
export const resetHowItWorksData = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(EVENT_NAME));
};

// Custom React hook to listen for live data changes
export const useHowItWorksStore = () => {
  const [data, setData] = useState<Record<'bakery' | 'travel', ProjectWorkflows>>(getHowItWorksData);

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

    const newSteps = steps.map((s) => (s.id === stepId ? { ...s, ...updatedStep } : s));

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

    saveHowItWorksData(newData);
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

    saveHowItWorksData(newData);
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

    saveHowItWorksData(newData);
  };

  return {
    data,
    updateStep,
    addStep,
    deleteStep,
    resetData: resetHowItWorksData,
  };
};
