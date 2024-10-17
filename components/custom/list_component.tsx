import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import Image from "next/image";
export default function ListComponent({
  id,
  title,
  // released,
  genres,
  image,
}: {
  id: number;
  title: string;
  released: boolean;
  genres: string,
  image: string;
}) {
  return (
    <Link href={`/series/${id}`}>
      <Alert className="flex items-center gap-2 my-2 h-28">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-md"
        />
        <div>
          <AlertTitle className="text-lg font-bold">{title}</AlertTitle>
          <AlertDescription>{genres}
             {/* className={`text-sm ${released ? "text-green-600" : "text-red-600"}`}
          >
             {released ? "Released" : "Not released"} */}
          </AlertDescription>
        </div>
      </Alert>
    </Link>
  );
}
