import { API } from '@constants/api';

const getHomeData = async () => {
        const res = await fetch(API.GET_HOME_DATA,{
            next: { revalidate: 1 } 
        });
        
        if (!res.ok) {
        //   throw new Error('Failed to fetch data')
          return null;
        }
        return res.json();      
}

export { getHomeData };