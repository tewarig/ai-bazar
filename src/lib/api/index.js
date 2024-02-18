import { API } from '@constants/api';

const getHomeData = async () => {
        const res = await fetch(API.GET_HOME_DATA,{
            next: {   cache: "no-store",
        } 
        });
        
        if (!res.ok) {
          return null;
        }
        return res.json();      
}

const getCategoriesData = async ({ name}) => {
    const res = await fetch(`${API.GET_CATEGORIES_DATA}/${name}`,{
        next: {   cache: "no-store",
    } 
    });
    if(!res.ok){
        return null;
    }
    return res.json();
}

const getModelDetails = async ({ name }) => {
    const res = await fetch(`${API.GET_MODEL_DETAILS}/${name}`,{
        next: {   cache: "no-store",
        revalidate: 1,
    } 
    });
    console.log("url",`${API.GET_MODEL_DETAILS}/${name}`);
    console.log(res);
    if(!res.ok){
        return null;
    }
    const data = res.json();
    console.log("res",data);
    return data;
    // return res.json();
}

const getAiModelData = async ({ name }) => {
    console.log("called1");
    const res = await fetch(`${API.GET_MODEL_DETAILS}/${name}`,{
        next: {   cache: "no-store",
        revalidate: 1,
    } 
    });
    console.log("called2");
    console.log("res",res);
    // if(!res.ok){
    //     console.log("not okay");
    //     return null;
    // }
    console.log("OK")
    return  await res.json();
}
export { getHomeData ,getCategoriesData,getModelDetails,getAiModelData };