import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { PostRef } from "./page";
import AddComment from "./add-comment";

export interface CommentRef extends HTMLDivElement {
  scrollToBottom(): void;
}

const Post = forwardRef<PostRef>((props, ref) => {
  const addCommentRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollAndFocusAddComment() {
        addCommentRef.current?.focus();
      },
    }),
    []
  );

  return (
    <>
      <article>
        <p>Welcome to my blog!</p>
        <AddComment ref={addCommentRef} />
      </article>
    </>
  );
});

export default Post;
