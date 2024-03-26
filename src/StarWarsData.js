import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const StarWarsData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      {data && (
        <ul>
          {data.results.map(character => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StarWarsData;
