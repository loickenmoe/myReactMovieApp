import React, { useEffect, useState } from "react";
import "../styles/starwarsComponentIA.css";

const StarWarsComponentIA = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {data.map((character) => (
          <div key={character.id}>
            <img src={character.image} className="image" alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default StarWarsComponentIA;
