import React from "react";
import Person from "./compoment/Person";

function Namelist() {
  const names = ["kaleab", "solomon", "israel", "barok"];
  const person = [
    {
      name: "kaleab",
      age: 23,
      skill: "React",
    },
    {
      name: "solomon",
      age: 23,
      skill: "Angular",
    },
  ];
  return (
    <div>
      <Person person={person} />
    </div>
  );
}

export default Namelist;
