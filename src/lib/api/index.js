import { API } from '@constants/api';

const getHomeData = async () => {
        const res = await fetch(API.GET_HOME_DATA,{
            next: { revalidate: 1 } 
        });
        
        if (!res.ok) {
          return null;
        }
        return res.json();      
}

const getCategoriesData = async ({ id}) => {
    const res = await fetch(`${API.GET_CATEGORIES_DATA}/${id}`,{
        next: { revalidate: 1 } 
    });
    if(!res.ok){
        return null;
    }
    return res.json();
}

export { getHomeData ,getCategoriesData };