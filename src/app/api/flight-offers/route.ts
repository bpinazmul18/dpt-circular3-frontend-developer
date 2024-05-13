import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/datas.json",
    "utf8",
  );
  const data = JSON.parse(file);

  return Response.json(data);
}
