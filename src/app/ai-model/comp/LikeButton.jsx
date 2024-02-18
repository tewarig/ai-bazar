"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";



function LikeButton({ likeCount }) {
  const [likes, setLikes] = useState(parseInt(likeCount));
  const { toast } = useToast();

  const isLiked = likes !== likeCount;
  const onClick = () => {
    if (!isLiked) {
      setLikes(likes + 1);
      toast({
        title: "Liked",
        description: "You liked this model",
      });
    }else {
        toast({
            title: "You have already liked this model",
          });
    }
  };
  return (
    <Badge
      variant="secondary"
      className="flex gap-4 w-fit  hover:bg-fuchsia-300	 hover:transition-colors"
      onClick={onClick}
    >
      <Heart size={16} />
      {likes} Like{" "}
    </Badge>
  );
}

export default LikeButton;
