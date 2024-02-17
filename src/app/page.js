import * as lucide from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { FileVideo, AudioLines, Images } from "lucide-react";
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Navbar from '@/components/ui/navbar';
import  CategoriesCard  from '@/components/ui/categoriesCard';
import ModelCard from '@/components/ui/modelCard';


export default function Home() {
 
  const categories = [
    {
    id: 1,
    icon: <FileVideo/>,
    title: "Text to Video",
    description : "Convert text to video"
    },
    {
     id: 2,
     icon: <AudioLines/>,
     title: "Text to Audio",
     description : "Convert text to audio"
    },{
      id: 3,
      icon:  <Images/>,
      title: "Text to Image",
      description : "Convert text to image"
    },
    {
      id: 4,
      icon: <Images/>,
      title: "Open Source Models",
      description: "Top Free Models",
    }
  ]
  return (
   <div> 
    <div>
     <div className="font-semibold text-3xl"> Top categories </div>
     <div className="py-8 flex flex-wrap">
      {
        categories.map((category) => (
          <CategoriesCard key={category.id}  categoryIconName={category.icon} title={category.title} description={category.description} />
        ))
      }
     </div>
    </div>
    <div>
      <div className="flex  justify-between items-center">
      <div className="font-semibold text-3xl"> Trending Models </div>
      <div className="hover:cursor-pointer"> see more</div>
      </div>
     <div className="py-8 flex flex-wrap gap-2">
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />

     </div>
    </div>
   </div>
  );
}
