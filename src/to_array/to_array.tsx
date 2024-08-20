/*
using React.Children.toArray(), react automatically asssins keys to elements in an array
*/


import React from "react";

interface ExampleProps {
  data: string[];
}

const ToArrayExample: React.FC<Readonly<ExampleProps>> = (props) => {
  const compData = props.data;

  return (
    <div>
      {React.Children.toArray(compData.map(dat => <span>{dat}</span>))}
    </div>
  );
};

export default ToArrayExample;
