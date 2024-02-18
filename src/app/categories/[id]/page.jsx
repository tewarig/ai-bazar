import ModelCard from "@/components/ui/modelCard";
import { humanize } from "@/lib/utils";
import { getCategoriesData } from "@lib/api";

export default async function  Page({ params }) {
  const categories = await getCategoriesData({ id: params.id });
  const { category ,ModelsByCategory} = categories;
    return <div>
      <div className="flex flex-col justify-between items-center">
      <div className=" font-semibold  text-3xl"> {category.name}</div>
      <div className="hover:cursor-pointer mt-2"> {ModelsByCategory.length} &nbsp; AI Models</div>
      <div className="py-8 grid grid-cols-3 gap-4">
        {ModelsByCategory.map((model)=>(<ModelCard id={model.id}  key={model.id} name={model.title} description={model.description} imageUrl={model.imageUrl}/>))}
      </div>
      </div>
    </div>
  }