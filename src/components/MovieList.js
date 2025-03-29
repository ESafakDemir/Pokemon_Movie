import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import useDebounce from '../hooks/useDebounce';

function MovieList() {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [searchTerm, setSearchTerm] = useState('Pokemon'); // Başlangıçta 'Pokemon' olarak ayarla
  const [page, setPage] = useState(1);

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Eğer searchTerm boşsa, tüm filmleri getir
    if (debouncedSearchTerm.trim() === '') {
      dispatch(fetchMovies({ searchTerm: '', page })); // Boş arama ile tüm veriyi getir
      return;
    }

    // Eğer searchTerm doluysa, belirli filmleri getir
    dispatch(fetchMovies({ searchTerm: debouncedSearchTerm, page }));
  }, [dispatch, debouncedSearchTerm, page]);

  const handleSearch = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setPage(1); // Arama terimi değiştiğinde sayfayı 1'e sıfırlıyoruz
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleError = () => {
    if (status === 'failed' && debouncedSearchTerm.trim() !== '') {
      return <p>Movie not found!</p>;
    }
    return null;
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-list">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              {movie.Poster !== 'N/A' && (
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              )}
              <h3>{movie.Title} ({movie.Year})</h3>
              <p>IMDb ID: {movie.imdbID}</p>
            </div>
          ))
        ) : (
          debouncedSearchTerm.trim() === '' ? (
            <p>Start typing to search for a movie...</p>
          ) : (
            handleError()
          )
        )}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default MovieList;
