import React from 'react'


const Movie = ({m}) => {

  return (
      <div className='movie_wrapper'>

            <div className="img_div">
           
                 <img src={`https://images.tmdb.org/t/p/w185_and_h278_bestv2/${m.poster_path}`} alt="movie" />
           
           </div>

            <div className="movie_text">
                <h2 className='movie_name'>{m.title} </h2>
                <p className='movie_releasedate'>Release date: {m.release_date}</p>
                <span className='movie_rating'>Rating: {m.vote_average}</span>
                <p className='movie_details'>{m.overview}</p>    
            </div>
            
         </div>
  )
}

export default Movie