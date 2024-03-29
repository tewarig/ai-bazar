import { API } from "@constants/api";

const getHomeData = async () => {
  const res = await fetch(API.GET_HOME_DATA, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }
  return res.json();
};

const getCategoriesData = async ({ name }) => {
  const res = await fetch(`${API.GET_CATEGORIES_DATA}/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
};

const getModelDetails = async ({ name }) => {
  const res = await fetch(`${API.GET_MODEL_DETAILS}/${name}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  const data = res.json();
  return data;
};

const getAiModelData = async ({ name }) => {
  const res = await fetch(`${API.GET_MODEL_DETAILS}/${name}`, {
    next: { revalidate: 3600 },
  });

  return await res.json();
};

const getAllMetaData = async () => {
  const res = await fetch(API.GET_ALL_META_DATA, {
    next: { cache: "no-store", revalidate: 1 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
};

const getModels = async () => {
  const res = await fetch(`${API.GET_ALL_MODELS}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
};
export {
  getHomeData,
  getCategoriesData,
  getModelDetails,
  getAiModelData,
  getAllMetaData,
  getModels,
};
