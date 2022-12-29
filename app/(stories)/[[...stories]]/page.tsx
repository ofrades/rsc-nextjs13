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
  console.log(params);
  let page = +(searchParams.page || 1);
  const type = params.stories ? params.stories[0] : "top"
  const stories: Story[] = await fetchAPI(`${mapStories[type as keyof typeof mapStories]}?page=${page}`)

  return (
    <div className="news-view">
      <div className="news-list-nav">
        {page > 1 ? (
          <Link
            className="page-link"
            href={`/${type}?page=${page - 1}`}
            aria-label="Previous Page"
          >
            {"<"} prev
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            {"<"} prev
          </span>
        )}
        <span>page {page}</span>
        {stories && stories.length >= 29 ? (
          <Link
            className="page-link"
            href={`/${type}?page=${page + 1}`}
            aria-label="Next Page"
          >
            more {">"}
          </Link>
        ) : (
          <span className="page-link disabled" aria-disabled="true">
            more {">"}
          </span>
        )}
      </div>
      <main className="news-list">
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
