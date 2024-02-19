import CategoriesCard from "@/components/ui/categoriesCard";
import ModelCard from "@/components/ui/modelCard";
import { getHomeData } from "@lib/api";
import Link from "next/link";

export default async function Home() {
  const data = await getHomeData();

  if (!data) return null;
  const { topCategories, featuredCategories } = data;

  return (
    <div className="p-2 ">
      <div className="">
        <div className="flex justify-center flex-wrap gap-4 p-4 ">
          {topCategories.map((category) => (
            <CategoriesCard
              key={category.id}
              categoryId={category.id}
              categoryIconName={category.icon}
              title={category.title}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
      {featuredCategories.map((category) => (
        <div key={category.id}>
          <div className="flex  justify-between items-center sm:px-4 md:px-0">
            <div className="font-semibold text-3xl p-2 underline">
              {" "}
              {category.name}{" "}
            </div>
            <Link href={`/categories/${category.name}`}>
              <div className="hover:cursor-pointer hover:underline hover:underline-offset-8">
                {" "}
                See More
              </div>
            </Link>
          </div>
          <div className="sm:py-4 md:py-8 lg:py-16 flex flex-wrap gap-8">
            {category.top3Models.map((model) => (
              <ModelCard
                id={model.id}
                key={model.id}
                name={model.title}
                description={model.description}
                imageUrl={model.imageUrl}
              />
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
