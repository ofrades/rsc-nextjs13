import Link from "next/link";

import ShowStory from "../Story";
import type { Comment } from "../Comment";
import Navigation from "./Navigation";

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
      <Navigation type={type} page={page} stories={stories} />
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
