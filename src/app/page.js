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
  {
    id: 6,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 7,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 8,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 9,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },
  {
    id: 10,
    title: 'The best of the best',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['best', 'top'],
  },  
];

export default function Home() {
  return (
    <div className="flex-col justify-center items-center">
      <div />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Search" />
        <Button type="submit"><Search size={24} strokeWidth={2} /></Button>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
      </div>
      <div>
        <Card className="p-4 flex-col justify-center align-center  text-center w-auto"> 
          
         <h1 className=""> Trending Today</h1>
         <div className="flex flex-col  max-h-32 flex-wrap  max-w-30 w-auto"> 
         {
            trending.map((item,index) => (
              <div key={item.id}>
                <span className=""> {index + 1} </span>.
                <span className=""> {item.title}</span> 
              </div>
            ))
         }̦
         </div>
        </Card>
      </div>

    </div>
  );
}
