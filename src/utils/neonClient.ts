import { neon } from '@neondatabase/serverless';
import { WorkflowStep, ProjectWorkflows, howItWorksData } from '../data/howItWorksData';

const dbUrl = import.meta.env.VITE_NEON_DATABASE_URL;

export const sql = dbUrl ? neon(dbUrl) : null;

export interface DBStepRow {
  id: string;
  project_id: 'bakery' | 'travel';
  side: 'customer' | 'admin';
  step_number: string;
  title: string;
  short_label: string;
  description: string;
  status_tag: 'Live' | 'Implemented' | 'System Workflow';
  metadata: { label: string; value: string }[];
  mockup_id: string;
}

// Fetch all steps from Neon Postgres
export async function fetchNeonSteps(): Promise<Record<'bakery' | 'travel', ProjectWorkflows> | null> {
  if (!sql) return null;

  try {
    const rows = (await sql`
      SELECT id, project_id, side, step_number, title, short_label, description, status_tag, metadata, mockup_id 
      FROM walkthrough_steps 
      ORDER BY project_id, side, step_number ASC;
    `) as DBStepRow[];

    if (!rows || rows.length === 0) return null;

    // Reconstruct full howItWorksData structure
    const result: Record<'bakery' | 'travel', ProjectWorkflows> = JSON.parse(JSON.stringify(howItWorksData));

    // Reset steps array to populate from DB
    result.bakery.customerFlow.steps = [];
    result.bakery.adminFlow.steps = [];
    result.travel.customerFlow.steps = [];
    result.travel.adminFlow.steps = [];

    rows.forEach((row) => {
      const step: WorkflowStep = {
        id: row.id,
        stepNumber: row.step_number,
        title: row.title,
        shortLabel: row.short_label,
        description: row.description,
        statusTag: row.status_tag,
        metadata: Array.isArray(row.metadata) ? row.metadata : [],
        mockupId: row.mockup_id,
      };

      if (row.project_id === 'bakery' || row.project_id === 'travel') {
        if (row.side === 'customer') {
          result[row.project_id].customerFlow.steps.push(step);
        } else {
          result[row.project_id].adminFlow.steps.push(step);
        }
      }
    });

    return result;
  } catch (err) {
    console.error('Failed to fetch steps from Neon Postgres:', err);
    return null;
  }
}

// Upsert a step into Neon Postgres
export async function upsertNeonStep(
  projectId: 'bakery' | 'travel',
  side: 'customer' | 'admin',
  step: WorkflowStep
) {
  if (!sql) return;

  try {
    const metaJson = JSON.stringify(step.metadata || []);

    await sql`
      INSERT INTO walkthrough_steps (id, project_id, side, step_number, title, short_label, description, status_tag, metadata, mockup_id)
      VALUES (${step.id}, ${projectId}, ${side}, ${step.stepNumber}, ${step.title}, ${step.shortLabel}, ${step.description}, ${step.statusTag}, ${metaJson}::jsonb, ${step.mockupId})
      ON CONFLICT (id) DO UPDATE SET
        project_id = EXCLUDED.project_id,
        side = EXCLUDED.side,
        step_number = EXCLUDED.step_number,
        title = EXCLUDED.title,
        short_label = EXCLUDED.short_label,
        description = EXCLUDED.description,
        status_tag = EXCLUDED.status_tag,
        metadata = EXCLUDED.metadata,
        mockup_id = EXCLUDED.mockup_id,
        updated_at = CURRENT_TIMESTAMP;
    `;
  } catch (err) {
    console.error('Failed to upsert step to Neon Postgres:', err);
  }
}

// Delete a step from Neon Postgres
export async function deleteNeonStep(stepId: string) {
  if (!sql) return;

  try {
    await sql`DELETE FROM walkthrough_steps WHERE id = ${stepId};`;
  } catch (err) {
    console.error('Failed to delete step from Neon Postgres:', err);
  }
}
