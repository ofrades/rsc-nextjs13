import Link from "next/link";
import { Story } from "./page";

export default function Navigatio({ type, page, stories }:{
  type: string;
  page: number;
  stories: Story[]
}) {
  return (

    <div className="bg-gray-900 text-gray-400 border-slate-200 rounded-sm p-3 flex justify-center">
      {page > 1 ? (
        <Link
          className="p-1"
          href={`/${type}?page=${page - 1}`}
          aria-label="Previous Page"
        >
          {"<"} prev
        </Link>
      ) : (
        <span className="text-gray-500 p-1" aria-disabled="true">
          {"<"} prev
        </span>
      )}
      <span className="p-1">page {page}</span>
      {stories && stories.length >= 29 ? (
        <Link
          className="p-1"
          href={`/${type}?page=${page + 1}`}
          aria-label="Next Page"
        >
          more {">"}
        </Link>
      ) : (
        <span className="text-gray-500 p-1" aria-disabled="true">
          more {">"}
        </span>
      )}
    </div>
  )
}
