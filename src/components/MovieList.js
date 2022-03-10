import React from 'react'
import Movie from './Movie'
import Spinner from './Spinner'


const MovieList = ({movie,isLoading}) => {

   return isLoading ? 
  
          (<Spinner/>) : 
         
         (       
          <>
              {movie?.map((m)=>{
                      return (
                        <Movie m = {m} key={m.id}/>
                      )
              })} 
          </>

                

        
  )
}

export default MovieList