import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=10b4b30ec8d3959471e1e09a5cd9e3a8&language=en-US&page=1'
      );
      const movies = await data.json();
      console.log(movies);
      setPopular(movies.results);
      setFiltered(movies.results);
    };
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
