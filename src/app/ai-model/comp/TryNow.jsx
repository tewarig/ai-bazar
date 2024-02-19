"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export default function TryNow({ modelName, modelBy }) {
  const [chat, setChats] = useState([]);
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      setChats([...chat, e.target.value]);
    }
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="outline" className="flex gap-2">
          {" "}
          <Zap /> Try now{" "}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ai Chat</SheetTitle>
          <SheetDescription>
            You are trying {modelName} by {modelBy}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Input />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">
              <SendHorizontal />
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
