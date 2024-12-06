import React from "react";

function Person({ person }) {
  return (
    <div>
      {person.map((person) => (
        <h1>
          name {person.name} age {person.age} skill {person.skill}
        </h1>
      ))}
    </div>
  );
}

export default Person;
