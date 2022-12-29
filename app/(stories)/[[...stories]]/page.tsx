import Link from "next/link";

import ShowStory from "../Story";
import type { Comment } from "../Comment";

export interface Story {
  id: string;
  points: string;
  url: string;
  title: string;
  domain: string;
  type: string;
  time_ago: string;
  user: string;
  comments_count: number;
  comments: Comment[];
}

const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
};


async function fetchAPI(path: string) {
  const url = `https://node-hnapi.herokuapp.com/${path}`;
  const headers = { "User-Agent": "chrome" };

  return fetch(url, { headers }).then((r) => r.json());
}

export default async function Index({ params, searchParams }: {
  params: { stories: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let page = +(searchParams.page || 1);
  const type = params.stories ? params.stories[0] : "top"
  const stories: Story[] = await fetchAPI(`${mapStories[type as keyof typeof mapStories]}?page=${page}`)

  return (
    <div className="pt-4">
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
      <main className="p-2">
        {stories && (
          <ul>
            {stories.map((story) => (
              <ShowStory key={story.id} story={story} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
