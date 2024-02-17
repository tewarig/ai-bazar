"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"
import { useRouter } from 'next/navigation'


import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export  default function CommandWrapper() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [categories , setCategories] = React.useState([{
    id: 1,
    name: "Text to Video",
  }, {
    id: 2,
    name: "Text to Audio",
  }, {
    id: 3,
    name: "Text to Image",
  }, {
    id: 4,
    name: "Open Source Models",
  }]);
  const [aiModels , setAiModels] = React.useState([{
    id: 1,
    name : "sora"
  },{
    id: 2,
    name : "gpt-3"
  },{
    id: 3,
    name : "gpt-4"
  }
]);

  React.useEffect(() => {
    const down = (e) => {
      console.log(e.key);
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearch("");
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])


  console.log("search", search);
  const handleItemSelect = ({type , name ,id}) => {
    setOpen((open) => !open)
    if(type === "category"){
      router.push("/categories/"+id);
      console.log("category selected", name);
    }
    if(type === "model"){
      router.push("/ai-model/"+id);
      console.log("model selected", name);
    }
    if(type === "search"){
      console.log("search selected", name);
    }
    if(type === "add-model"){
      console.log("add model selected", name);
    }
  }

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen} >
        <CommandInput placeholder="Type a command or search..."  value={search} onValueChange={setSearch}/>
        <CommandList>
          <CommandSeparator />
          <CommandGroup heading="Categories">
            {categories.map((category) => (
              <CommandItem key={category.id} 
              onSelect={()=>{
                handleItemSelect({type: "category" ,id: category.id })
              }}
              >
                <span>{category.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="AI Models">
            {aiModels.map((model) => (
              <CommandItem key={model.id} 
              onSelect={()=>{
                handleItemSelect({type: "model" ,id: model.id })
              }}
              >
                <span>{model.name}</span>
              </CommandItem>
            ))}
            </CommandGroup>
            <CommandGroup heading="Action">
              <CommandItem key="search">
                <span>Search <span className="font-bold">{search}</span>&nbsp; in AI Bazar</span>
              </CommandItem>
              <CommandItem key="add-model">
                <span>Submit <span className="font-bold">{search}</span>&nbsp; in AI Bazar as a model</span>
              </CommandItem>
           
            </CommandGroup>
          {/* <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  )
}
