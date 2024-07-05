// Display items of each movie 
function displayMovieCatalog(movies) {
  console.log('Movie Catalog:');
  movies.forEach((movie) => {
    console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
  });
}
// Add new Movie
function addNewMovie(movies, newMovie) {
  movies.push(newMovie);
}

// Update data of the movie
function updateMovieDetails(movies, index, updatedMovie) {
  movies[index] = updatedMovie;
}
// delete specific movie
function deleteMovie(movies, index) {
  movies.splice(index, 1);
}

// Filter data of the movie
function searchMoviesByTitle(movies, searchTerm) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
// search about movie by the director
function searchMoviesByDirector(movies, searchDirector) {
  return movies.filter((movie) =>
    movie.director.toLowerCase().includes(searchDirector.toLowerCase())
  );
}
// search about movie by the Genre
function searchMoviesByGenre(movies, searchGenre) {
  return movies.filter((movie) =>
    movie.genre.toLowerCase().includes(searchGenre.toLowerCase())
  );
}
// filter about movie by the Genre

function filterMoviesByGenre(movies, filterGenre) {
  return movies.filter((movie) =>
    movie.genre.toLowerCase() === filterGenre.toLowerCase()
  );
}
// filter about movie by the year 

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
