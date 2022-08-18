import React, { useEffect, useState } from 'react';
import '../App.css';
const image = require('../assets/no-image.png');

const Header = ({ data, setResource, handleClick, setType }) => {
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const findMovies = (inputValue) => {
    const filterItems = data.filter((items) => {
      return items.Title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setResource(inputValue);

    if (inputValue === '') {
      setFilterData([]);
    } else {
      setFilterData(filterItems);
    }
  };

  useEffect(() => {
    findMovies(inputValue);
  }, [inputValue]);

  return (
    <header className='bg-dark container-fluid p-4 ps-5 pe-5 border-bottom border-dark border-2 '>
      <div className='d-flex justify-content-between'>
        <h2 className='text-white m-0'>
          Movie <span className='text-warning'>search</span>
        </h2>
        <div className='d-flex justify-content-end w-50'>
          <select
            name=''
            id='movie-type'
            className='form-control w-25 text-light bg-dark me-2'
            onClick={(e) => setType(e.target.value)}
          >
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
          </select>

          <input
            placeholder='Search movies...'
            className='form-control p-2 w-50'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            on
          />
        </div>
        {filterData.length !== 0 && (
          <>
            <div className='bg-dark w-25 text-break position-absolute dropdown table table-dark table-hover h-50 m-2'>
              {filterData &&
                filterData.map((items) => (
                  <>
                    <div
                      onClick={() =>
                        handleClick(items.imdbID) & setInputValue('')
                      }
                      className='list-unstyled text-light d-flex h-25 border-bottom'
                      key={items.imdbID}
                    >
                      {items.Poster === 'N/A' ? (
                        <img
                          src={image}
                          alt='movie'
                          className='h-50 w-25 mt-3'
                        />
                      ) : (
                        <img
                          src={items.Poster}
                          alt='movie'
                          className='h-100 w-25'
                        />
                      )}
                      <div className='d-flex flex-column'>
                        <p href className='ps-2 p-0 m-0 title'>
                          {items.Title}
                        </p>
                        <i className='ps-2 p-0'>{items.Year}</i>
                        <i className='ps-2 p-0'>{items.Type}</i>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
