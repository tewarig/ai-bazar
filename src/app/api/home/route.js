
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  const categories = [
    {
    id: 1,
    icon: "FileVideo",
    title: "Text to Video",
    description : "Convert text to video"
    },
    {
     id: 2,
     icon: "AudioLines",
     title: "Text to Audio",
     description : "Convert text to audio"
    },{
      id: 3,
      icon:  "Images",
      title: "Text to Image",
      description : "Convert text to image"
    },
    {
      id: 4,
      icon: "Images",
      title: "Open Source Models",
      description: "Top Free Models",
    }
  ]
  const trendingModels = {
     categoryId : 5,
     name: "Trending Models",
     top3Models : [{
        id: 1,
        title: "Sora",
        description: "Make High Quality Videos upto 1 min",
        imageUrl: "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
     },
     {
      id: 1,
      title: "Sora",
      description: "Make High Quality Videos upto 1 min",
      imageUrl: "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
   },
   {
    id: 1,
    title: "Sora",
    description: "Make High Quality Videos upto 1 min",
    imageUrl: "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
 }]
  };
  const featuredCategories = [
    trendingModels
  ]

  return NextResponse.json({ topCategories: categories,
    featuredCategories,}, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
