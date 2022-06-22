import React from "react";
import style from './App.css'
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg'

// 62cb3deb

const API_URL = 'http://www.omdbapi.com?apikey=62cb3deb'

/*const movie1 = {
  "Title": "Spiderman",
  "Year": "2010",
  "imdbID": "tt1785572",
  "Type": "movie",
  "Poster": "N/A"
}*/

const App = () => {
  const [movies, setMovies] = React.useState([])
  const [searchTerm, setSearchTerm] = React.useState()
 
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()

      setMovies(data.Search)
     
    }

    React.useEffect(() => {
      searchMovies('Avengers')
    }, [])


  return (
    <div className='app'>
      <h1>Ilha de Filmes</h1>

      <div className='search'>
        <input
        placeholder="seu filme favorito"
        value={searchTerm}
        onChange={({target}) => setSearchTerm(target.value)}
         />
       <img 
       src={SearchIcon}
       alt='Search'
       onClick={() => searchMovies(searchTerm)}
       />   
      </div>

      {movies?.length > 0  
      ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
       ))}
      </div> ) : (
          <div className="empty"><h2>Nenhum filme encontrado</h2>
          </div>
      )}

     
      </div>    
  );
}

export default App;
