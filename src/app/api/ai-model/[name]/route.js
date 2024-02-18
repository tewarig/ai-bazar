
import { NextResponse } from "next/server";
import { Models } from "../../constants"; 


export async function GET(request, context) {
  const { params: { name } } = context;
  const Model = Models.find((model) => model.title.toLowerCase() === name.toLowerCase());
 
 return NextResponse.json({ Model }, { status: 200 });
}

