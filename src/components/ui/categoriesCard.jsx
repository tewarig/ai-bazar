"use client";
import React ,  { useEffect, useState } from "react"
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';

function CategoriesCard({ Icon , title , description , categoryId}) {
  return (
<Link href={`/categories/${categoryId}`}>
<CardContent className="grid gap-4 w-fit ">
<div className=" flex items-center space-x-4 rounded-md border p-4 hover:cursor-pointer">
   {Icon} 
  <div className="flex-1 space-y-1">
    <p className="text-sm font-medium leading-none">
     {title}
    </p>
    <p className="text-sm text-muted-foreground">
     {description}
    </p>
  </div>
  {/* <Switch /> */}
</div>
<div>
</div>
</CardContent>
</Link>
  )
}

export default   CategoriesCard ;