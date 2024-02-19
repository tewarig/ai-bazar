"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export default function CommandModal({ categories, aiModels }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const down = (e) => {
      console.log(e.key);
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearch("");
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleItemSelect = ({ type, name, id }) => {
    setOpen((open) => !open);
    if (type === "category") {
      router.push("/categories/" + name);
    }
    if (type === "model") {
      router.push("/ai-model/" + name);
      console.log("model selected", name);
    }
    if (type === "search") {
      console.log("search selected", name);
    }
    if (type === "add-model") {
      console.log("add model selected", name);
    }
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandSeparator />
          <CommandGroup heading="Categories">
            {categories?.map((category) => (
              <CommandItem
                key={category.id}
                onSelect={() => {
                  handleItemSelect({ type: "category", name: category.name });
                }}
              >
                <span>{category.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="AI Models">
            {aiModels?.map((model) => (
              <CommandItem
                key={model.id}
                onSelect={() => {
                  handleItemSelect({ type: "model", name: model.name });
                }}
              >
                <span>{model.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
