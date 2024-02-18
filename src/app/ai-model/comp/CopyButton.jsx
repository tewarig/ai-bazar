"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

function CopyButton({ text }) {
  const { toast } = useToast();

  const handleClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: text,
        });
      })
      .catch((error) => {
        toast({
          title: "Copy failed",
          description: error,
        });
      });
  };
  return (
    <Button size="sm" variant="ghost" onClick={handleClick}>
      <Copy size={16} />{" "}
    </Button>
  );
}

export default CopyButton;
