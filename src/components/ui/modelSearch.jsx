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

const FILTERS = {
  SORT_BY: "SORTBY",
  CATEGORY: "CATEGORY",
  SEARCH: "SEARCH",
};
function ModelSearch({ models, categories }) {
  const [filteredModels, setFilteredModels] = React.useState(models);
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [sortBy, setSortBy] = React.useState();
  const [searchText, setSearchText] = React.useState("");
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
    <div>
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
      </div>
      <div className="py-8 grid sm:grid-cols-3 md:grid-cols-3 place-items-center h-screen  md:gap-4">
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
