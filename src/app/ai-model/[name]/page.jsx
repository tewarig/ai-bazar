import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Copy,
  Heart,
  Zap,
  BookOpenText,
  DollarSign,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Markdown from "react-markdown";
import { getAiModelData } from "@lib/api";

export default async function Page({ params }) {
  const aiModelData = await getAiModelData({
    name: params.name.toString().trim(),
  });
  const { Model } = aiModelData;

  return (
    <div>
      <div className="flex flex-row  justify-start">
        <div className="font-semibold text-3xl">
          {Model.by} &nbsp;/&nbsp;{Model.title}
        </div>
        <div className="font-semibold text-3xl"></div>
        <Button size="sm" variant="ghost">
          <Copy size={16} />{" "}
        </Button>
        <Badge
          variant="secondary"
          className="flex gap-4 w-fit  hover:bg-fuchsia-300	 hover:transition-colors"
        >
          <Heart size={16} />
          560 Like{" "}
        </Badge>
      </div>
      <div className="text-md mt-2">{Model.description}</div>
      <div className="flex flex-row  justify-between  items-center w-full mt-4">
        <div className="flex flex-row  gap-2">
          {Model.categories.map((category) => (
            <Link href={`/categories/${category.name}`} key={category.id}>
              <Badge variant="primary" className="flex gap-4 w-fit">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-4">
          <Button size="sm" variant="outline" className="flex gap-2">
            {" "}
            <Zap /> Try now{" "}
          </Button>
          <Button size="sm" variant="outline" className="flex gap-2">
            {" "}
            <BookOpenText /> Read Docs{" "}
          </Button>
          <Button size="sm" variant="outline" className="flex gap-2">
            {" "}
            <DollarSign /> Pricing{" "}
          </Button>
        </div>
      </div>
      <div className="border-b my-4"></div>
      <Tabs defaultValue="description" className="">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="about">About {Model.by} </TabsTrigger>
          <TabsTrigger value="example">Example </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Markdown>{Model.largeDescription}</Markdown>
        </TabsContent>
        <TabsContent value="about">
          <Markdown>{Model.aboutCreator}</Markdown>
        </TabsContent>
        <TabsContent value="example"> </TabsContent>
      </Tabs>
    </div>
  );
}
