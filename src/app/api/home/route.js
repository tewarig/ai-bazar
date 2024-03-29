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
    name: "Trending",
    top3Models: [
      {
        id: 1,
        title: "Sora",
        by: "OpenAI",
        prefix: "",
        description: "Make High Quality Videos upto 1 min",
        type: "video",
        imageUrl:
          "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
        largeDescription:
          "Sora, aptly named for the Japanese word for \"sky,\" is OpenAI's groundbreaking text-to-video model, promising to revolutionize the way we create and interact with visual content. Unlike its predecessors, Sora isn't satisfied with static images; it paints entire worlds in motion, conjuring realistic and imaginative scenes from mere textual instructions. This capability unlocks a treasure trove of possibilities, from redefining entertainment to democratizing video production. Let's delve into the heart of Sora, exploring its capabilities, potential applications, and the fascinating technology behind its magic.",
        aboutCreator:
          "OpenAI is an artificial intelligence research laboratory consisting of researchers and engineers who are focused on creating artificial general intelligence (AGI), a form of AI that can understand, learn, and apply its intelligence across a wide range of tasks similar to human intelligence. Here are some key points about OpenAI:\n- **Mission**: OpenAI's mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. They aim to achieve this by conducting research in AI and sharing their findings openly.\n- **Research**: OpenAI conducts cutting-edge research in various areas of artificial intelligence, including natural language processing, reinforcement learning, computer vision, robotics, and more. Their research outputs often include publications in academic journals and conferences, as well as releasing code and models to the public.\n- **Transparency and Collaboration**: OpenAI emphasizes transparency in their research and development process.",
        example:
          "No code example, currently this model is not available for public use.",
        isFree: false,
        likes: 432,
        users: 3422,
        views: 2311,
        launchDate: 1708286640,
        categories: [
          {
            id: 12,
            name: "Video",
          },
          {
            id: 9,
            name: "OpenAI",
          },
          {
            id: 1,
            name: "TextToVideo",
          },
          {
            id: 6,
            name: "Paid",
          },
        ],
      },
      {
        id: 2,
        title: "Gemini",
        isFree: false,
        by: "Google",
        description: "Google Gemini is a large-scale deep learning model ",
        example:
          "Code Example - \n - To send a GET request to ``` ai.bazar.vercel.app/getData ``` to get response \n - To send a GET request to ``` ai.bazar.vercel.app/credits ``` to know the balance \n - [view docs](https://www.google.com)    ",
        likes: 200,
        users: 422,
        views: 231,
        launchDate: 1705604640,
        type: "text",
        imageUrl:
          "https://utfs.io/f/cc5d2943-5dc7-48af-91ea-f81113359a47-sdoail.png",
        categories: [
          {
            id: 3,
            name: "TextToImage",
          },
          {
            id: 10,
            name: "Google",
          },
          {
            id: 6,
            name: "Paid",
          },
        ],
      },

      {
        id: 3,
        title: "GPT- 4",
        by: "OpenAI",
        isFree: false,
        description: "Best in class text generation model",
        example:
          "Code Example - \n - To send a GET request to ``` ai.bazar.vercel.app/getData ``` to get response \n - To send a GET request to ``` ai.bazar.vercel.app/credits ``` to know the balance \n - [view docs](https://www.google.com)    ",
        type: "text",
        imageUrl:
          "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
        likes: 900,
        users: 3222,
        views: 2331,
        launchDate: 1676747040,
        categories: [
          {
            id: 3,
            name: "TextToImage",
          },
          {
            id: 9,
            name: "OpenAI",
          },
          {
            id: 6,
            name: "Paid",
          },
        ],
      },
    ],
  };
  const MostLovedModels = {
    categoryId: 5,
    name: "Liked",
    prefix: "Most",
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
        id: 2,
        title: "Gemini",
        isFree: false,
        by: "Google",
        description: "Google Gemini is a large-scale deep learning model ",
        example:
          "Code Example - \n - To send a GET request to ``` ai.bazar.vercel.app/getData ``` to get response \n - To send a GET request to ``` ai.bazar.vercel.app/credits ``` to know the balance \n - [view docs](https://www.google.com)    ",
        likes: 200,
        users: 422,
        views: 231,
        launchDate: 1705604640,
        type: "text",
        imageUrl:
          "https://utfs.io/f/cc5d2943-5dc7-48af-91ea-f81113359a47-sdoail.png",
        categories: [
          {
            id: 3,
            name: "TextToImage",
          },
          {
            id: 10,
            name: "Google",
          },
          {
            id: 6,
            name: "Paid",
          },
        ],
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
