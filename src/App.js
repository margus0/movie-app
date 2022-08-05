import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from './components/Content';
import Header from './components/Header';

const BASE_URL = 'https://www.omdbapi.com/?apikey=83813a57&';

function App() {
  const [data, setData] = useState([]);
  const [foundData, setFoundData] = useState({
    Actors: 'Rami Malek, Christian Slater, Carly Chaikin',
    Awards: 'Won 3 Primetime Emmys. 21 wins & 85 nominations total',
    Country: 'United States',
    Director: 'N/A',
    Genre: 'Crime, Drama, Thriller',
    Language:
      'English, Swedish, Danish, Chinese, Persian, Spanish, Samoan, Arabic, German',
    Metascore: 'N/A',
    Plot: 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he work...',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg',
    Rated: 'TV-MA',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.6/10',
      },
    ],
    Released: '24 Jun 2015',
    Response: 'True',
    Runtime: '49 min',
    Title: 'Mr. Robot',
    Type: 'series',
    Writer: 'Sam Esmail',
    Year: '2015–2019',
    imdbID: 'tt4158110',
    imdbRating: '8.6',
    imdbVotes: '377,887',
    totalSeasons: 'N/A',
  });
  const [resource, setResource] = useState('');

  async function findData(resource) {
    try {
      const resp = await axios.get(BASE_URL + 's=' + resource);
      if (resp.data.Response === 'True') {
        setData(resp.data.Search);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  const handleClick = async (id) => {
    const select = await axios.get(BASE_URL + 'i=' + id);
    setFoundData(select.data);
  };

  useEffect(() => {
    findData(resource);
  }, [resource]);

  return (
    <div className='App bg-dark bg-gradient min-vh-100'>
      <Header data={data} setResource={setResource} handleClick={handleClick} />
      <Content data={foundData} />
    </div>
  );
}

export default App;