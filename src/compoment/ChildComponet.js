import React from "react";

function ChildComponet(props) {
  return (
    <div>
      <button onClick={() => props.greatHandler("  child")}>
        ChildComponet
      </button>
    </div>
  );
}

export default ChildComponet;
