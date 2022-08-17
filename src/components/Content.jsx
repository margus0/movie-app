import React from 'react';
import MovieDetails from './MovieDetails';
const image = require('../assets/no-image.png');

const Content = ({ data }) => {
  return (
    <div className='d-flex flex-row bg-dark mt-5 w-75 p-5 mx-auto border-2 text-light'>
      {data.length !== 0 && (
        <>
          {data.Poster !== 'N/A' ? (
            <img src={data.Poster} alt='' className='h-25' />
          ) : (
            <img src={image} alt='' />
          )}
          <MovieDetails data={data} />
        </>
      )}
    </div>
  );
};

export default Content;
