import Link from "next/link";

import Toggle  from "./Toggle";

export interface Comment {
  id: string;
  user: string;
  time_ago: string;
  content: string;
  comments: Comment[];
}

const Comment = (props: { comment: Comment }) => {
  return (
    <li className="comment">
      <div className="by">
        <Link href={`/users/${props.comment.user}`}>{props.comment.user}</Link>{" "}
        {props.comment.time_ago} ago
      </div>
      <div
        className="text"
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
