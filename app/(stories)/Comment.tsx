import Link from "next/link";

import Toggle from "./Toggle";

export interface Comment {
  id: string;
  user: string;
  time_ago: string;
  content: string;
  comments: Comment[];
}

const Comment = (props: { comment: Comment }) => {
  return (
    <li className="border-t-1">
      <div className="text-gray-600">
        <Link className="text-gray-500 hover:text-violet-300" href={`/users/${props.comment.user}`}>{props.comment.user}</Link>{" "}
        {props.comment.time_ago} ago
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: props.comment.content }}
      />
      {!!props.comment.comments.length && (
        <Toggle>
          {props.comment.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </Toggle>
      )}
    </li>
  );
};

export default Comment;
