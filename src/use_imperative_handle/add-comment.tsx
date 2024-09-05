import React, { forwardRef } from "react";

const AddComment = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div> 
      <input type="text" placeholder="Add a comment" ref={ref} />
      <button type="submit">Submit</button>
    </div>
  );
});

export default AddComment;
