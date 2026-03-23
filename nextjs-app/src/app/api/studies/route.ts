import { NextResponse } from "next/server";

import type { Study, StudyIndication, StudyStatus, StudySummary } from "@/types/Study";

import { loadStudies } from "./studiesStore";

export async function GET(): Promise<NextResponse<StudySummary[]>> {
  const studies = await loadStudies();

  const studiesSummary: StudySummary[] = studies.map((study) => ({
    id: study.id,
    patientName: study.patientName,
    patientId: study.patientId,
    studyDate: study.studyDate,
    indication: study.indication as StudyIndication,
    lvef: study.lvef,
    status: study.status as StudyStatus,
  }));

  return NextResponse.json(studiesSummary, { status: 200 });
}

