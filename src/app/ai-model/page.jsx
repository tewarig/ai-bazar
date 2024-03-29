import React from "react";
import { getModels ,getAllMetaData } from "@lib/api";
import ModelSearch from "@/components/ui/modelSearch";

async function Page() {
  const ModelsData = await getModels();
  const data = await getAllMetaData();

  return (
      <ModelSearch models={ModelsData?.Models} categories={data?.categories}   />
  );
}

export default Page;
