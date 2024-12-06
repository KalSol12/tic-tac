import React from "react";

// function Greet() {
//   return <h1>kaleab tenkir</h1>;
// }

export const Greet = (props) => {
  //props.name = "sola";
  const { name, lastName } = props;
  return (
    <div>
      <h1>
        hello {name} {lastName}
      </h1>
    </div>
  );
};

//export default Greet;
