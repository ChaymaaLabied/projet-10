import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("data/logements.json")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <div className="banner">Chez vous , partout et ailleurs</div>
      <div className="card-container">
        {logements.map((logement) => (
          <div className="card-wrapper" key={logement.id}>
            <Card
              imageUrl={logement.cover}
              title={logement.title}
              id={logement.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
