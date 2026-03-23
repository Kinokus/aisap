import type { Study, StudyStatus, StudySummary } from '@/types/Study';

export type StudyDetailResponse = Study | { error: string };

export async function fetchStudiesSummaries(): Promise<StudySummary[]> {
  const res = await fetch('/api/studies');
  const json = (await res.json()) as StudySummary[];
  if (!res.ok) {
    throw new Error('Failed to load studies.');
  }
  return json;
}

export async function patchStudyStatus(studyId: string, status: StudyStatus): Promise<void> {
  const res = await fetch(`/api/studies/${studyId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  if (!res.ok) {
    throw new Error('Failed to update study status.');
  }
}

export async function fetchSelectedStudy(id: string): Promise<StudyDetailResponse> {
  const res = await fetch(`/api/studies/selected/${id}`);
  const json = (await res.json()) as StudyDetailResponse;
  if (!res.ok) {
    throw new Error(json && 'error' in json ? json.error : 'Failed to load study.');
  }
  return json;
}

export async function patchSelectedStudyStatus(
  id: string,
  status: StudyStatus,
): Promise<StudyDetailResponse> {
  const res = await fetch(`/api/studies/selected/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  const json = (await res.json()) as StudyDetailResponse;
  if (!res.ok) {
    throw new Error(json && 'error' in json ? json.error : 'Failed to update study.');
  }
  return json;
}
