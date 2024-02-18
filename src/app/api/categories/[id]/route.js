
import { NextResponse } from "next/server";
import { Categories ,Models} from "../../constants";

// To handle a GET request to /api
export async function GET(request , context) {
  const { params: { id } } = context;
  const category = Categories.find((category) => category.id === parseInt(id));
  const ModelsByCategory = Models.filter((model) => model.categories.includes(category.name));
  
  if (!category) {
    return NextResponse.error("Category not found", { status: 404 });
  }
  if(!ModelsByCategory){
    return NextResponse.error("Models not found", { status: 404 });
  }
  return NextResponse.json({ ModelsByCategory }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
