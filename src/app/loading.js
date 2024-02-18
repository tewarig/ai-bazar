import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center p-32 gap-4 text-center">
      <div className="text-muted-foreground">
        Why did the AI cross the internet? To get to the other search engine!
        But be careful, it might run over some outdated memes along the way!
        🤖🌐{" "}
      </div>
      <Skeleton className="h-4 w-[300px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-[50px]" />
      <Skeleton className="h-4 w-[25px]" />
      <Skeleton className="h-4 w-[10px]" />
    </div>
  );
}
export default Loading;
