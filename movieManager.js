function displayMovieCatalog(movies) {
  console.log('Movie Catalog:');
  movies.forEach((movie) => {
    console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
  });
}

function addNewMovie(movies, newMovie) {
  movies.push(newMovie);
}

function updateMovieDetails(movies, index, updatedMovie) {
  movies[index] = updatedMovie;
}

function deleteMovie(movies, index) {
  movies.splice(index, 1);
}

function searchMoviesByTitle(movies, searchTerm) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function searchMoviesByDirector(movies, searchDirector) {
  return movies.filter((movie) =>
    movie.director.toLowerCase().includes(searchDirector.toLowerCase())
  );
}

function searchMoviesByGenre(movies, searchGenre) {
  return movies.filter((movie) =>
    movie.genre.toLowerCase().includes(searchGenre.toLowerCase())
  );
}

function filterMoviesByGenre(movies, filterGenre) {
  return movies.filter((movie) =>
    movie.genre.toLowerCase() === filterGenre.toLowerCase()
  );
}

function filterMoviesByReleaseYear(movies, filterReleaseYear) {
  return movies.filter((movie) => movie.year === filterReleaseYear);
}

module.exports = {
  displayMovieCatalog,
  addNewMovie,
  updateMovieDetails,
  deleteMovie,
  searchMoviesByTitle,
  searchMoviesByDirector,
  searchMoviesByGenre,
  filterMoviesByGenre,
  filterMoviesByReleaseYear,
};
