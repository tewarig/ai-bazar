import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

function ModelCard({ name, description, imageUrl, id }) {
  return (
    <Link href={`/ai-model/${name}`}>
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>{name} </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Image
            src={imageUrl}
            alt="model image"
            width={380}
            height={200}
            quality={100}
          />
        </CardContent>
      </Card>
    </Link>
  );
}

export default ModelCard;
