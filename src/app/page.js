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
import { getHomeData ,getAiModelData ,getModelDetails } from "@lib/api";



export default async function Home() {
  const data  = await getHomeData();

  
   if(!data) return null;
  const { topCategories , featuredCategories} = data;

  return (
   <div> 
    <div>
     <div className="font-semibold text-3xl"> Top categories </div>
     <div className="py-8 flex flex-wrap">
      {
        topCategories.map((category) => (
          <CategoriesCard key={category.id} categoryId={category.id} categoryIconName={category.icon} title={category.title} description={category.description} />
        ))
      }
     </div>
    </div>
    {
        featuredCategories.map((category)=>( 
        <div key={category.id}>
          <div className="flex  justify-between items-center">
          <div className="font-semibold text-3xl"> {category.name} </div>
          <div className="hover:cursor-pointer hover:underline-offset-8"> see more</div>
          </div>
         <div className="py-8 flex flex-wrap gap-2">
          {category.top3Models.map((model)=>( <ModelCard  id={model.id} key={model.id} name={model.title} description={model.description} imageUrl={model.imageUrl} />
          ))}

         </div>
        </div>))
    }
   </div>
  );
}
