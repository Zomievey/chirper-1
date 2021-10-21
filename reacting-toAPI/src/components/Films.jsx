import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

export default function Films() {
  const [films, setfilms] = useState([]);
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films").then(async (response) => {
      const data = await response.json();
      setfilms(data);
    });
  }, []);
  return (
    <>
      {films.map((film) => {
        return (
          <>
            <div className="card"> 
              <Image className="film-photo mt-3" src={film.image} rounded />
            

            <span>{film.title}</span>
            <span>{film.director}</span>
            <span>{film.release_date}</span>
            <span>{film.description}</span>
            <a target={"_blank"} href={film.url} rel="noreferrer">
              INFO
            </a>

            <br />
                </div>
            </>
            
        );
      })}
    </>
  );
}
