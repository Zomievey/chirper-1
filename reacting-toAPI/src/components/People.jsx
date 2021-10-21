import { useState, useEffect } from "react";

export default function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people").then(async (response) => {
      const data = await response.json();
      setPeople(data);
    });
  }, []);
  return (
    <>
      {people.map((person) => {
        return (
          <>
            <div className="card mt-3">
              <span>{person.name}</span>
              <span>{person.gender}</span>
              <span>{person.age}</span>
              <a target={"_blank"} href={person.url} rel="noreferrer">
                INFO
              </a>
            </div>
          </>
        );
      })}
    </>
  );
}
