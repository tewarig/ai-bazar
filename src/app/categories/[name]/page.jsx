import ModelCard from "@/components/ui/modelCard";
import ModelSearch from "@/components/ui/modelSearch";
import { getCategoriesData } from "@lib/api";

export async function generateMetadata({ params }) {
  return {
    title: params.name,
    description: `View Top ${params.name} Models on Ai Bazar`,
  };
}

export default async function Page({ params }) {
  const categories = await getCategoriesData({ name: params.name });
  const { category, ModelsByCategory } = categories;
  return (
    <div>
      <div className="flex flex-col justify-between items-center">
        <div className=" font-semibold  text-3xl"> {category.name}</div>
        <ModelSearch
          models={ModelsByCategory}
          allowToAddModel={true}
          categoryName={category.name}
        />
      </div>
    </div>
  );
}
