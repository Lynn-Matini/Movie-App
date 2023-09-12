import { useEffect } from 'react';

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    setFiltered(filtered);
  }, [activeGenre]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        Popular
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
