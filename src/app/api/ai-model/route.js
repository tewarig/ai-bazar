
import { NextResponse } from "next/server";
import { Models } from "../constants"; 


export async function GET(request) {

 return NextResponse.json({ Models }, { status: 200 });
}

