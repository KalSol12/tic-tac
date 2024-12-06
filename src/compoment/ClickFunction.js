import React from "react";

const ClickFunction = () => {
  function functionHandler() {
    console.log("button is clicked");
  }

  return (
    <div>
      <button onClick={functionHandler}>click </button>
    </div>
  );
};

export default ClickFunction;
