"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Menu, Search } from "lucide-react"
import { cn  , humanize} from "@/lib/utils"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadCrumbs"


export default function Navbar() {
  const [state, setState] = React.useState(false)
  const pathName = usePathname();
  const breadcrumbArray = pathName.split("/").map((item) => decodeURI(item.trim()));
  const showBreadCrumb = breadcrumbArray.length > 2;
  
  return (
    <div className="  flex flex-col">
    <nav className="bg-white w-full border-b md:border-0  sticky">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold">AI Bazar</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className=" justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <form className="flex items-center  space-x-2 border rounded-md p-2 font-medium text-muted-foreground opacity-100">
              <Search className="h-5 w-5 flex-none text-gray-300 mr-4" />
              Press
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>k
             </kbd>
             &nbsp; to search
            </form>
          </ul>
        </div>
      </div>
    </nav>
    <div className="mx-32 my-4">
    {showBreadCrumb &&(<Breadcrumb>
     {
      breadcrumbArray.map((item, index) => {
        if(index === 0) return null;
        if (index === breadcrumbArray.length - 1) {
          return (
            <BreadcrumbItem key={index} isCurrentPage>
              <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        }
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={`/${item}`}>{humanize(item)}</BreadcrumbLink>
          </BreadcrumbItem>
        )
      })
     }
    </Breadcrumb>)}
    </div>
    </div>
  )
}