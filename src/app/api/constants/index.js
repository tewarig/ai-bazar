const Models = [
  {
    id: 1,
    title: "Sora",
    by: "OpenAI",
    description: "Make High Quality Videos upto 1 min",
    imageUrl:
      "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
    largeDescription:
      "Sora, aptly named for the Japanese word for \"sky,\" is OpenAI's groundbreaking text-to-video model, promising to revolutionize the way we create and interact with visual content. Unlike its predecessors, Sora isn't satisfied with static images; it paints entire worlds in motion, conjuring realistic and imaginative scenes from mere textual instructions. This capability unlocks a treasure trove of possibilities, from redefining entertainment to democratizing video production. Let's delve into the heart of Sora, exploring its capabilities, potential applications, and the fascinating technology behind its magic.",
    aboutCreator:
      "OpenAI is an artificial intelligence research laboratory consisting of researchers and engineers who are focused on creating artificial general intelligence (AGI), a form of AI that can understand, learn, and apply its intelligence across a wide range of tasks similar to human intelligence. Here are some key points about OpenAI:\n- **Mission**: OpenAI's mission is to ensure that artificial general intelligence (AGI) benefits all of humanity. They aim to achieve this by conducting research in AI and sharing their findings openly.\n- **Research**: OpenAI conducts cutting-edge research in various areas of artificial intelligence, including natural language processing, reinforcement learning, computer vision, robotics, and more. Their research outputs often include publications in academic journals and conferences, as well as releasing code and models to the public.\n- **Transparency and Collaboration**: OpenAI emphasizes transparency in their research and development process.",
    example:
      "No code example, currently this model is not available for public use.",
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
    by: "Google",
    description: "Google Gemini is a large-scale deep learning model ",
    imageUrl:
      "https://utfs.io/f/375a64f4-b7ca-4924-aa5a-edaacfa197e7-y9uhda.png",
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
    description: "Best in class text generation model",
    imageUrl:
      "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
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
  {
    id: 4,
    title: "Lamma",
    by: "Meta",
    description: "Free Open Source Model by META , GPT alternative",
    imageUrl:
      "https://utfs.io/f/b984ef15-822f-4232-9c20-4a89d6707a98-989ilr.png",
    categories: [
      {
        id: 3,
        name: "TextToImage",
      },
      {
        id: 11,
        name: "Meta",
      },
      {
        id: 5,
        name: "Free",
      },
      {
        id: 4,
        name: "OpenSource",
      },
    ],
  },
  {
    id: 5,
    title: "GPT- 3",
    by: "OpenAI",
    description: "Best in class text generation model",
    imageUrl:
      "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
    categories: [
      {
        id: 3,
        name: "TextToImage",
      },
      {
        id: 7,
        name: "Freemium",
      },
    ],
  },
  {
    id: 6,
    title: "GPT- 3.5Turbo",
    by: "OpenAI",
    description: "Best in class text generation model",
    imageUrl:
      "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
    categories: [
      {
        id: 9,
        name: "OpenAI",
      },
      {
        id: 7,
        name: "Freemium",
      },
    ],
  },
  {
    id: 7,
    title: "Midjourney",
    by: "Midjourney",
    description: "Best in class text generation model",
    imageUrl:
      "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
    categories: [
      {
        id: 8,
        name: "Midjourney",
      },
      {
        id: 3,
        name: "TextToImage",
      },
      {
        id: 7,
        name: "Freemium",
      },
    ],
  },
  {
    id: 8,
    title: "Wisper",
    by: "OpenAI",
    description: "Best in class Audio generation model",
    imageUrl:
      "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
    categories: [
      {
        id: 9,
        name: "OpenAI",
      },
      {
        id: 2,
        name: "TextToAudio",
      },
      {
        id: 6,
        name: "Paid",
      },
    ],
  },
];

const Categories = [
  {
    id: 1,
    name: "TextToVideo",
  },
  {
    id: 2,
    name: "TextToAudio",
  },
  {
    id: 3,
    name: "TextToImage",
  },
  {
    id: 4,
    name: "OpenSource",
  },
  {
    id: 5,
    name: "Free",
  },
  {
    id: 6,
    name: "Paid",
  },
  {
    id: 7,
    name: "Freemium",
  },
  {
    id: 8,
    name: "Midjourney",
  },
  {
    id: 9,
    name: "OpenAI",
  },
  {
    id: 10,
    name: "Google",
  },
  {
    id: 11,
    name: "Meta",
  },
  {
    id: 12,
    name: "Video",
  },
];
export { Models, Categories };
