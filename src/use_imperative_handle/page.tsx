import React, { useRef } from "react";
import Post from "./Post";

export interface PostRef {
  scrollAndFocusAddComment(): void;
}

const Page: React.FC = () => {
  const postRef = useRef<PostRef>(null);

  const handleClick = () => {
    postRef.current?.scrollAndFocusAddComment();
  };

  return (
    <>
      <button onClick={handleClick}>Add A comment</button>
      <div style={{ height: "1500px" }}></div>
      <Post ref={postRef} />
    </>
  );
};

export default Page;
