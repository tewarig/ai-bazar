const Models = 
 [{
       id: 1,
       title: "Sora",
       by: "OpenAI",
       description: "Make High Quality Videos upto 1 min",
       imageUrl: "https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif",
       categories: ["Video", "OpenAI", "TextToVideo",  "Paid"]
    },

  {
   id: 2,
   title: "Gemini",
   by: "Google",
   description: "Google Gemini is a large-scale deep learning model ",
   imageUrl: "https://utfs.io/f/375a64f4-b7ca-4924-aa5a-edaacfa197e7-y9uhda.png",
   categories: ["TextToImage", "Google", "Paid"]

},
{
 id: 3,
 title: "GPT- 4",
 by: "OpenAI",
 description: "Best in class text generation model",
 imageUrl: "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
 categories: ["TextToImage", "OpenAI",  "Paid"]

},{
    id: 4,
    title: "Lamma",
    by: "Meta",
    description: "Free Open Source Model by META , GPT alternative", 
    imageUrl: "https://utfs.io/f/b984ef15-822f-4232-9c20-4a89d6707a98-989ilr.png",
    categories: ["TextToImage", "Meta",  "Free", "OpenSource"]

 },
 {
  id: 5,
  title: "GPT- 3",
  by: "OpenAI",
  description: "Best in class text generation model",
  imageUrl: "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
  categories: [ "OpenAI",  "freemium"]

  },
  {
    id: 6,
    title: "GPT- 3.5Turbo",
    by: "OpenAI",
    description: "Best in class text generation model",
    imageUrl: "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
    categories: [ "OpenAI",  "freemium "]
  
    },
    {
        id: 7,
        title: "Midjourney",
        by: "Midjourney",
        description: "Best in class text generation model",
        imageUrl: "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
        categories: [ "Midjourney",  "TextToImage", "freemium "]
      
    },
    {
        id: 8,
        title: "Wisper",
        by: "OpenAI",
        description: "Best in class Audio generation model",
        imageUrl: "https://utfs.io/f/693c4e37-130e-4bbf-8c1a-bef2b6c87977-bkva19.png",
        categories: [ "OpenAI","TextToAudio", "Paid "]
      
        },
]

const Categories = [
  {
    id: 1,
    name: "TextToVideo"
  },
  {
    id: 2,
    name: "TextToAudio"
  },
  {
    id: 3,
    name: "TextToImage"
  },
  {
    id: 4,
    name: "OpenSource"
  },
  {
    id: 5,
    name: "Free"
  },{
    id: 6,
    name: "Paid",
  },{
    id: 7,
    name: "Freemium"
  },{
    id: 8,
    name: "Midjourney"
  },
  {
    id: 9,
    name: "OpenAI"
  },{
    id: 10,
    name: "Google"
  },{
    id: 11,
    name: "Meta"
  },
]
export { Models ,Categories };