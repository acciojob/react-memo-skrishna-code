import React from "react";

function ReactMemo({ counter }) {
  console.log("ReactMemo rendered");

  return (
    <div>
      <h3>Counter from ReactMemo: {counter}</h3>
    </div>
  );
}

export default React.memo(ReactMemo);
