"use client";
import React from "react";
import Link from "next/link";
import {
  CardContent,
} from "@/components/ui/card";
import { FileVideo ,AudioLines ,Images } from "lucide-react";

const ICONS = {
  FileVideo: <FileVideo size={24} />,
  AudioLines: <AudioLines size={24} />,
  Images: <Images size={24} />,
};

function CategoriesCard({ icon, title, description, categoryId }) {
  return (
    <Link href={`/categories/${title}`}>
      <CardContent className="grid gap-4 w-fit ">
        <div className=" flex items-center space-x-4 rounded-md border p-4 hover:cursor-pointer">
          {ICONS[icon]}
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div></div>
      </CardContent>
    </Link>
  );
}

export default CategoriesCard;
