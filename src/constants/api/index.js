const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const API = {
  GET_HOME_DATA: `${BASE_URL}api/home`,
  GET_CATEGORIES_DATA: `${BASE_URL}api/categories`,
  GET_MODEL_DETAILS: `${BASE_URL}api/ai-model`,
  GET_ALL_META_DATA: `${BASE_URL}api/getAllMetaData`,
  GET_ALL_MODELS: `${BASE_URL}api/getAllModels`,
};
export { API };
