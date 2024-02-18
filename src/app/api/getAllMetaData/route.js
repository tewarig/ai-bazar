import { NextResponse } from "next/server";
import { Categories, Models } from "../constants";

// To handle a GET request to /api
export async function GET(request) {
  console.log("GET request to /api");
  const categories = Categories.map((category) => ({
    name: category.name,
    id: category.id,
  }));
  const model = Models.map((model) => ({ name: model.title, id: model.id }));
  return NextResponse.json({ categories, aiModels: model }, { status: 200 });
}
