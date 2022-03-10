import React, {useState} from 'react'
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import MovieList from './components/MovieList';

const KEY_ID = 'YOUR THEMDB API_KEY'

function App() {

  const [movie, setMovie] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setLoading] = useState(false)


  
  const searchMovies = async (e) => {
    e.preventDefault()
    setLoading(true)

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_ID}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
        const res = await axios.get(url);
        console.log(res);
        setMovie(res.data.results)
        setLoading(false)
    }catch(err){
        console.error(err);
        setLoading(false)
    }
 }



  return (
    <div className="App">
        <main>
          
            <Search  
               query={query}  
               setQuery={setQuery}  
               searchMovies={searchMovies} 
               isLoading={isLoading}
              />
            <MovieList 
              movie={movie} 
              setMovie={setMovie} 
              isLoading={isLoading}
             />
            
        </main>
    </div>
  );
}

export default App;
