"use client";
import React, { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextArea } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Zap, SendHorizontal } from "lucide-react";

export default function TryNow({ modelName, modelBy, type }) {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBotOutput, setShowBotOutput] = useState(false);
  const [botOutput, setBotOutput] = useState("");

  const handleButtonPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowBotOutput(true);
      if (type === "text") {
        const textArr =
          "this is a dummy placeholder text to display ai model try out!".split(
            " "
          );
        // bot typing effect
        textArr.forEach((t, i) => {
          setTimeout(
            () => setBotOutput(() => textArr.slice(0, i + 1).join(" ")),
            i * 100
          );
        });
      } else {
        setShowBotOutput(true);
      }
    }, 2000);
  };

  const HandleBotOut = () => {
    if (type === "text") {
      return (
        <>
          <div className="gap-4 mt-4"> Output : </div>
          <div className="mt-4 ">{botOutput}</div>
        </>
      );
    } else if (type === "image") {
      return (
        <>
          <div className="gap-4 mt-4"> Output : </div>
          <div className="mt-4 ">
            <Image
              src="https://assets-global.website-files.com/61554cf069663530fc823d21/63148533fc6ebc0bc46bf859_argo-11.jpg"
              alt="ai sample"
              width="500"
              height="500"
            />
          </div>
        </>
      );
    } else if (type === "audio") {
      return (
        <>
          <div className="gap-4 mt-4"> Output : </div>
          <div className="mt-4 ">
            <audio
              src="https://file-examples.com/storage/fe6094330665d3b9591fdea/2017/11/file_example_MP3_700KB.mp3"
              controls
            ></audio>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="gap-4 mt-4"> Output : </div>
          <div className="mt-4 ">
            <Image
              src="https://i.giphy.com/8hYQgBIIHkCPjRTmai.webp"
              alt="ai sample"
              width="500"
              height="500"
            />
          </div>
        </>
      );
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonPress();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div size="sm" variant="outline" className="flex gap-2">
          {" "}
          <Zap /> Try now{" "}
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Try Now</SheetTitle>
          <SheetDescription>
            You are trying {modelName} by {modelBy}
          </SheetDescription>
          <div className="flex flex-col gap-4 mt-4">
            <TextArea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message"
              disabled={loading}
            />
            <Button
              size="md"
              variant="outline"
              className="flex gap-4 p-2 items-center justify-center"
              disabled={loading}
              onClick={() => {
                handleButtonPress();
              }}
            >
              <SendHorizontal />
            </Button>
          </div>
          {loading && (
            <div className="flex flex-row gap-4 mt-4">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          )}
          {showBotOutput && <HandleBotOut />}
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
