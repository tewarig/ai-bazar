import { NextResponse } from "next/server";
import { Categories, Models } from "../../constants";

// To handle a GET request to /api
export async function GET(request, context) {
  const {
    params: { name },
  } = context;
  const category = Categories.find(
    (category) => category.name?.toLowerCase() === name?.toLowerCase()
  );
  const ModelsByCategory = Models.filter((model) => {
    const categories = model.categories.map((c) => c.name?.toLowerCase());
    const includes = categories.includes(name?.toLowerCase());
    return includes;
  });

  if (!category) {
    return NextResponse.error("Category not found", { status: 404 });
  }
  if (!ModelsByCategory) {
    return NextResponse.error("Models not found", { status: 404 });
  }
  return NextResponse.json({ category, ModelsByCategory }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
