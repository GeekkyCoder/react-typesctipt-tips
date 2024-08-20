/*
component recieved as prop will not re render if its parent does re render!
*/


import React, { useState } from "react";

const NonPerformantComponent: React.FC = () => {
  const [count, setCount] = useState(1);

  const heavyComputation = () => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += Math.random();
    }

    return result;
  };

  return (
    <div>
      <h2>Non-Performant Component</h2>
      <p>Computation result: {heavyComputation()}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </div>
  );
};

//parent component will recieve the non performant component as children
const ParentComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [parentCount, setParentCount] = useState(1);

  return (
    <div>
      <h2>Parent Component Count: {parentCount}</h2>
      <button onClick={() => setParentCount((prevCount) => prevCount + 1)}>
        parent button
      </button>
      {children}
    </div>
  );
};

const ChildrenPropExample: React.FC = () => {
  return (
    <ParentComponent>
      <NonPerformantComponent />
    </ParentComponent>
  );
};

export default ChildrenPropExample;
