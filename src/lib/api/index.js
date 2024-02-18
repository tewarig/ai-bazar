import { API } from '@constants/api';

const getHomeData = async () => {
        const res = await fetch(API.GET_HOME_DATA,{
            next: { revalidate: 1 } 
        });
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
       
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        return res.json();      
}

export { getHomeData };