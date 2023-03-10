import Link from "next/link";
import { Story } from "../../[[...stories]]/page";

import Comment from "../../Comment";

async function fetchAPI(path: string) {
  const url = `https://node-hnapi.herokuapp.com/${path}`;
  const headers = { "User-Agent": "chrome" };

  return fetch(url, { headers }).then((r) => r.json());
}

const Stories = async ({ params }: {
  params: { id: string };
}) => {

  const story: Story = await fetchAPI(`item/${params.id}`)
  return (
    story && (
      <div>
        <div className="bg-gray-800 p-5 rounded-sm border-b-2 border-gray-900 leading-5">
          <a href={story.url} target="_blank" rel="noreferrer">
            <h1>{story.title}</h1>
          </a>
          {story.domain && <span className="host">({story.domain})</span>}
          <p className="meta">
            ⭐ {story.points} | by{" "}
            <Link href={`/users/${story.user}`}>{story.user}</Link>{" "}
            {story.time_ago} ago
          </p>
        </div>
        <div className="bg-gray-800 p-5 rounded-sm border-b-2 border-gray-900 leading-5">
          <p className="item-view-comments-header">
            {story.comments_count
              ? story.comments_count + " comments"
              : "No comments yet."}
          </p>
          <ul className="comment-children">
            {story.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Stories;
