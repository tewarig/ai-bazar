import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, BookOpenText, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Markdown from "react-markdown";
import { getAiModelData } from "@lib/api";
import LikeButton from "../comp/LikeButton";
import CopyButton from "../comp/CopyButton";
import TryNow from "../comp/TryNow";

export async function generateMetadata({ params }) {
  const aiModelData = await getAiModelData({
    name: params.name.toString().trim(),
  });

  return {
    title: decodeURI(params.name),
    description: aiModelData.description,
  };
}

export default async function Page({ params }) {
  const aiModelData = await getAiModelData({
    name: params.name.toString().trim(),
  });

  if (!aiModelData) {
    return null;
  }
  const { Model } = aiModelData;

  return (
    <div className="p-2">
      <div className="flex flex-row  justify-start">
        <div className="font-semibold text-3xl">
          {Model.by} &nbsp;/&nbsp;{Model.title}
        </div>
        <div className="font-semibold text-3xl"></div>
        <CopyButton text={Model.by + " " + Model.title} />
        <LikeButton likeCount={Model.likes} />
      </div>
      <div className="text-md mt-2">{Model.description}</div>
      <div className="flex-row flex-wrap gap-4">
        <div className="flex flex-row gap-4 p-2">
          {Model.categories.map((category) => (
            <Link href={`/categories/${category.name}`} key={category.id}>
              <Badge variant="primary" className="flex gap-4 w-fit">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
      <div className="border-b my-4"></div>
      <Tabs defaultValue="description" className="">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="about">About {Model.by} </TabsTrigger>
          <TabsTrigger value="example">Docs </TabsTrigger>
          <TryNow
            modelName={Model.title}
            modelBy={Model.by}
            type={Model.type}
          />
        </TabsList>
        <TabsContent value="description">
          <Markdown>{Model.largeDescription}</Markdown>
        </TabsContent>
        <TabsContent value="about">
          <Markdown>{Model.aboutCreator}</Markdown>
        </TabsContent>
        <TabsContent value="example">
          {" "}
          <Markdown>{Model.example}</Markdown>{" "}
        </TabsContent>
      </Tabs>
    </div>
  );
}
