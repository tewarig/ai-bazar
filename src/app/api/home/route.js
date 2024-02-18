import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  const categories = [
    {
      id: 1,
      icon: "FileVideo",
      title: "TextToVideo",
      description: "Convert text to video",
    },
    {
      id: 2,
      icon: "AudioLines",
      title: "TextToAudio",
      description: "Convert text to audio",
    },
    {
      id: 3,
      icon: "Images",
      title: "TextToImage",
      description: "Convert text to image",
    },
    {
      id: 4,
      icon: "Images",
      title: "OpenSource",
      description: "Top Free Models",
    },
  ];
  const trendingModels = {
    categoryId: 5,
    name: "Trending Models",
    top3Models: [
      {
        id: 1,
        title: "Sora",
        description: "Make High Quality Videos upto 1 min",
        imageUrl:
          "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
      },
      {
        id: 2,
        title: "Gemini",
        description: "Google Gemini is a large-scale deep learning model ",
        imageUrl:
          "https://utfs.io/f/375a64f4-b7ca-4924-aa5a-edaacfa197e7-y9uhda.png",
      },
      {
        id: 3,
        title: "GPT- 4",
        description: "Best in class text generation model",
        imageUrl:
          "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
      },
    ],
  };
  const MostLovedModels = {
    categoryId: 5,
    name: "Most Likes Models",
    top3Models: [
      {
        id: 3,
        title: "Lamma",
        description: "Free Open Source Model by META , GPT alternative",
        imageUrl:
          "https://utfs.io/f/b984ef15-822f-4232-9c20-4a89d6707a98-989ilr.png",
      },
      {
        id: 6,
        title: "GPT- 4",
        description: "Best in class text generation model",
        imageUrl:
          "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
      },
      {
        id: 5,
        title: "Gemini",
        description: "Google Gemini is a large-scale deep learning model ",
        imageUrl:
          "https://utfs.io/f/375a64f4-b7ca-4924-aa5a-edaacfa197e7-y9uhda.png",
      },
    ],
  };
  const featuredCategories = [trendingModels, MostLovedModels];

  return NextResponse.json(
    { topCategories: categories, featuredCategories },
    { status: 200 }
  );
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
