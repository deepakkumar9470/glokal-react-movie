import React from 'react'



function Search({query, setQuery,searchMovies,isLoading}) {

    return (
         <section className="searchbox-wrapper">
              
              <div className="head">
                <h2 className='movie_head'>React Movie Search</h2>
              </div>

              <div className="input_wrapper">
               <span className="movie_label" htmlFor="query">Movie name</span>
               <input 
                   className="searchbox" 
                   type="text" 
                   name="movie" 
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   placeholder="Enter movie name" />


                 <button 
                    className="search_btn" 
                    type="submit" 
                    onClick={searchMovies}
                    disabled={isLoading}
                    >Search!
               </button> 
               

              </div>
              
              {/* <MovieList/> */}

         </section>
    )
}

export default Search
