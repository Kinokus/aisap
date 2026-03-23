import studiesData from "@/app/api/hello/mock/studiesData.json";
import { NextResponse } from "next/server";

import type { Study } from "@/types/Study";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse<Study | { error: string }>> {
  const studies = studiesData as unknown as Study[];
  const study = studies.find((s) => s.id === params.id);

  if (!study) {
    return NextResponse.json({ error: "Study not found" }, { status: 404 });
  }

  return NextResponse.json(study, { status: 200 });
}

