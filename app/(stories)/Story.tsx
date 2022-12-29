import Link from "next/link";
import { Story } from "./[[...stories]]/page";

const ShowStory = (props: { story: Story }) => {
  return (
    <li className="bg-gray-800 p-5 rounded-sm border-b-2 border-gray-900 leading-5">
      <span className="text-gray-500 m-1">⭐ {props.story.points}</span>
      <span className="text-gray-400">
        {props.story.url && !props.story.url.startsWith("item?id=") ? (
          <>
            <a href={props.story.url} target="_blank" rel="noreferrer">
              {props.story.title}
            </a>
            <span className="text-gray-600"> ({props.story.domain})</span>
          </>
        ) : (
          <Link href={`/item/${props.story.id}`}>{props.story.title}</Link>
        )}
      </span>
      <br />
      <span className="text-gray-600">
        {props.story.type !== "job" ? (
          <>
            by <Link className="text-gray-500 hover:text-violet-300" href={`/users/${props.story.user}`}>{props.story.user}</Link>{" "}
            {props.story.time_ago} |{" "}
            <Link className="text-gray-500 hover:text-violet-300" href={`/stories/${props.story.id}`}>
              {props.story.comments_count
                ? `${props.story.comments_count} comments`
                : "discuss"}
            </Link>
          </>
        ) : (
          <Link href={`/stories/${props.story.id}`}>{props.story.time_ago}</Link>
        )}
      </span>
      {props.story.type !== "link" && (
        <>
          {" "}
          <span className="text-gray-700">{props.story.type}</span>
        </>
      )}
    </li>
  );
};

export default ShowStory;
