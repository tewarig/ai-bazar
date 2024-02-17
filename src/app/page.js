import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const trending = [
  {
    id: 1,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 2,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 3,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 4,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 5,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  }, 
];

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  text-center">
      <div className="flex w-full items-center space-x-2  sm:max-w-sm sm:p-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <Input type="search" placeholder="Search" />
        <Button type="submit"><Search size={24} strokeWidth={2} /></Button>
      </div>
      <div className="flex w-full max-w-sm items-center justify-center space-x-2">
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
      </div>
      <div className="mt-8">
        <Card className="p-4 flex flex-col justify-center align-center  gap-2 text-center "> 
          
         <h1 className=" text-pretty   font-semibold"> Trending Today</h1>
         <div className="flex flex-col  max-h-32 flex-wrap  min-w-40"> 
         {
            trending.map((item,index) => (
              <div key={item.id} >
                <span className=""> {index + 1} </span>.
                <span className=" cursor-pointer hover:underline "> {item.title}</span> 
              </div>
            ))
         }̦
         </div>
         <div className="flex flex-col  max-h-32 flex-wrap cursor-pointer hover:underline  font-normal">
          View More
          </div>
        </Card>
      </div>

    </div>
  );
}
