import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ModelCard from "@/components/ui/modelCard";
import { humanize } from "@/lib/utils";
import Link from "next/link";
import { Copy  , Heart, Video , Zap ,BookOpenText ,DollarSign} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Markdown from 'react-markdown'




export default async function Page({ params    }) {
  const categories = [
    {
      id: 1,
      name: "Text to Video",
    },
    {
      id: 2,
      name: "Text to Audio",
    },
    {
      id: 3,
      name: "Text to Image",
    },
    {
      id: 4,
      name: "Open Source Models"
    },
  ];
  const markdown = "## Hello World";
    return <div>
      <div className="flex flex-row  justify-start">
      <div className="font-semibold text-3xl"> 
      Model Name  
      </div>
      <Button size="sm" variant="ghost"> 
      <Copy size={16} /> </Button> 
      <Badge variant="secondary" className="flex gap-4 w-fit  hover:bg-fuchsia-300	 hover:transition-colors" > 
      <Heart  size={16}/>560 Like </Badge>
      </div>
      <div className="flex flex-row  justify-between  items-center w-full mt-4">
        <div className="flex flex-row  gap-2">
       {categories.map((category) => (
         <Link href={`/categories/${category.id}`} key={category.id} >
          {/* //TODO: Add Icon */}
          <Badge variant="primary" className="flex gap-4 w-fit" >
           {category.name}
        </Badge>
        </Link>
        ))
      }
      </div>
       <div className="flex flex-row gap-4">
        <Button size="sm" variant="outline" className="flex gap-2"> <Zap /> Try now </Button>
        <Button size="sm" variant="outline" className="flex gap-2"> <BookOpenText />  Read Docs </Button>
        <Button size="sm" variant="outline" className="flex gap-2"> <DollarSign />  Pricing </Button>
      </div>
      </div>
  <div className="border-b my-4"></div>
  <Markdown>{markdown}</Markdown>

    </div>
  }

  export async function getStaticPaths() {
    return { 
      // props: { source: mdxSource },
      fallback: true,   
       paths: [
      // Object variant:
      { params: { id: '123' } },
    ], }
  }

//   // getStaticProps.js
// export async function getStaticProps({ params }) {
//   // const res = await fetch(`https://example.com/api/data/${params.id}`);
//   // const data = await res.json();
//   return { props: { markdown : "## Hello World"} };
// }