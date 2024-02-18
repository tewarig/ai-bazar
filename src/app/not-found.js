import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <Link href="/">Go back home</Link>
      </div>
    </div>
  );
}
