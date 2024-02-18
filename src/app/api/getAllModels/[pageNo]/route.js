import { NextResponse } from "next/server";
import { Categories, Models } from "../../constants";

// To handle a GET request to /api
export async function GET(request , context) {
  return NextResponse.json({ Models  }, { status: 200 });
}
