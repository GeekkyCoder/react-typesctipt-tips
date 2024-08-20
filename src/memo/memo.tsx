import React, { useState, useMemo, memo } from "react";
import Child from "./child";

const MemoChild = memo(Child);

function Memo() {
  const [count, setCount] = useState(1);

  const style = useMemo(() => ({ height: "20%", index: 1 }), []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
      </div>
      {/* both will be re render  because style will unique object in each re render , uncomment and check this out */}
      {/* <MemoChild style={{ height: "20%",index:1 }} />
      <Child style={{ height: "20%",index:2 }} /> */}

      {/* now the memoized child is not re rendered, because we have memoized the result object, so in each re render it will be same in memory */}
      <MemoChild style={style} />
      <Child style={{ height: "20%", index: 2 }} />
    </>
  );
}

export default Memo;
