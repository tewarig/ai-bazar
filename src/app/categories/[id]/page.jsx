import ModelCard from "@/components/ui/modelCard";
import { humanize } from "@/lib/utils";

export default function Page({ params }) {
    return <div>
      <div className="flex flex-col justify-between items-center">
      {/* <div className="font-semibold text-3xl"> {humanize(params.name)} </div> */}
      <div className="hover:cursor-pointer"> 10 AI Models</div>
      <div className="py-8 grid grid-cols-3 gap-4">
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
      <ModelCard name="Sora" description="Make long Videos upto 1 min" imageUrl="https://utfs.io/f/4b3e5af2-4937-4f96-89d9-3a5b36382caa-23sln.avif" />
     </div>
      </div>
    </div>
  }