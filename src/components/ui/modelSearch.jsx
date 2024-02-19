"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ModelCard from "./modelCard";
import { Input } from "./input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
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

const FILTERS = {
  SORT_BY: "SORTBY",
  CATEGORY: "CATEGORY",
  SEARCH: "SEARCH",
};
function ModelSearch({ models, categories, allowToAddModel, categoryName }) {
  const { toast } = useToast();
  const [filteredModels, setFilteredModels] = React.useState(models);
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [sortBy, setSortBy] = React.useState();
  const [searchText, setSearchText] = React.useState("");
  const [openSheet, setSheetOpen] = React.useState(false);
  const schema = z.object({
    name: z
      .string()
      .min(3, "Name should be atleast 3 characters long")
      .max(20, "Name should be atmost 20 characters long"),
    infoLink: z.string().url("Invalid URL"),
    info: z
      .string()
      .min(10, "Info should be atleast 10 characters long")
      .max(100, "Info should be atmost 100 characters long"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const handleChange = ({ changedValue, value }) => {
    if (changedValue === FILTERS.SORT_BY) {
      let finalValue = models;
      if (selectedCategory) {
        finalValue = models.filter((model) => {
          const categoriesArray = model.categories.map((c) =>
            c.name?.toLowerCase()
          );
          const finalCategories = categoriesArray.includes(
            selectedCategory.toLowerCase()
          );
          return finalCategories;
        });
      }
      if (searchText) {
        finalValue = finalValue.filter((model) => {
          return model.title.toLowerCase().includes(searchText.toLowerCase());
        });
      }
      finalValue = finalValue.sort((a, b) => {
        return b[value] - a[value];
      });
      setFilteredModels(finalValue);
    } else if (changedValue === FILTERS.SEARCH) {
      let finalValue = models.filter((model) => {
        return model.title.toLowerCase().includes(value.toLowerCase());
      });
      if (sortBy) {
        finalValue = finalValue.sort((a, b) => {
          return b[sortBy] - a[sortBy];
        });
      }
      if (selectedCategory) {
        finalValue = finalValue.filter((model) => {
          const categoriesArray = model.categories.map((c) =>
            c.name?.toLowerCase()
          );
          const finalCategories = categoriesArray.includes(
            selectedCategory.toLowerCase()
          );
          return finalCategories;
        });
      }
      setFilteredModels(finalValue);
    } else {
      let finalValue = models;
      if (sortBy) {
        finalValue = finalValue.sort((a, b) => {
          return b[sortBy] - a[sortBy];
        });
      }
      if (searchText) {
        finalValue = finalValue.filter((model) => {
          return model.title.toLowerCase().includes(value.toLowerCase());
        });
      }
      finalValue = finalValue.filter((model) => {
        const categoriesArray = model.categories.map((c) =>
          c.name?.toLowerCase()
        );
        const finalCategories = categoriesArray.includes(value.toLowerCase());
        return finalCategories;
      });

      setFilteredModels(finalValue);
    }
  };
  const handleChangeSortBy = (value) => {
    setSortBy(value);
    handleChange({ changedValue: FILTERS.SORT_BY, value });
  };
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    handleChange({ changedValue: FILTERS.SEARCH, value: e.target.value });
  };
  const handleSelectValueChange = (value) => {
    setSelectedCategory(value);
    handleChange({ changedValue: FILTERS.CATEGORY, value });
  };
  return (
    <div className="">
      <div className=" flex  justify-between gap-4 sm:mt-4 md:mt-8">
        <Input
          placeholder="Search by Model Name"
          value={searchText}
          onChange={handleSearch}
        />
        {categories && (
          <Select
            value={selectedCategory}
            onValueChange={handleSelectValueChange}
          >
            <SelectTrigger className="w-[230px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                {categories.map((category) => (
                  <SelectItem key={categories.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        <Select value={sortBy} onValueChange={handleChangeSortBy}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="likes">Likes</SelectItem>
              <SelectItem value="views">Views</SelectItem>
              <SelectItem value="users">Users</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {allowToAddModel && (
          <Sheet open={openSheet} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                size="md"
                variant="outline"
                className="flex gap-4 w-60"
                onClick={() => {
                  setSheetOpen(true);
                }}
              >
                {" "}
                Add A  Model
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Submit An Ai Model</SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col gap-8 mt-4">
                  <form
                    onSubmit={handleSubmit((data) => {
                      toast({
                        title: "Your Submission is being reviewed",
                        description:
                          "Our Team Will Review this model and add it to the list soon.",
                      });
                      setSheetOpen(false);
                    })}
                  >
                    <Input
                      placeholder="Model Name"
                      {...register("name")}
                      error={errors.name?.message}
                      className="mt-8 mb-2"
                    />
                    <Input
                      placeholder="Info Link"
                      {...register("infoLink")}
                      error={errors.infoLink?.message}
                      className="mt-8 mb-2"
                    />
                    <Input
                      placeholder="Info"
                      {...register("info")}
                      error={errors.info?.message}
                      className="mt-8 mb-2"
                    />
                    <Button
                      type="submit"
                      size="md"
                      variant="primary"
                      className="mt-4"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        )}
      </div>
      <div className="sm:py-4 md:py-8 lg:py-16 flex flex-wrap  gap-8">
        {filteredModels?.map((model) => (
          <ModelCard
            id={model.id}
            key={model.id}
            name={model.title}
            description={model.description}
            imageUrl={model.imageUrl}
          />
        ))}
        {filteredModels.length === 0 && (
          <div className="col-span-3 flex justify-center items-center w-[130px]">
            <p>No models found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelSearch;
