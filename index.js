const fileHandler = require('./fileHandler');
const movieManager = require('./movieManager');
const apiRequests = require('./apiRequests');
const userInterface = require('./userInterface');



async function start() {
  try {
    let movies = await fileHandler.readDataFromFile('./data.json');

    while (true) {
      const choice = await userInterface.displayMainMenu();

      switch (choice) {
        case '1':
          movieManager.displayMovieCatalog(movies);
          break;
        case '2':
          const newMovie = await userInterface.promptNewMovie();
          movieManager.addNewMovie(movies, newMovie);
          await fileHandler.writeDataToFile('./data.json', movies);
          movieManager.displayMovieCatalog(movies); // Add this line to display the updated movie catalog
          break;
        case '3':
          const updatedMovie = await userInterface.promptUpdatedMovie();
          movieManager.updateMovieDetails(movies, updatedMovie.index, updatedMovie.movie);
          await fileHandler.writeDataToFile('./data.json', movies);
          break;
        case '4':
          const movieToDelete = await userInterface.promptMovieToDelete();
          movieManager.deleteMovie(movies, movieToDelete.index);
          await fileHandler.writeDataToFile('./data.json', movies);
          break;
        case '5':
          const searchOption = await userInterface.displaySearchMenu();
          let searchResults = [];
          switch (searchOption) {
            case '1':
              const searchTerm = await userInterface.promptSearchTerm();
              searchResults = movieManager.searchMoviesByTitle(movies, searchTerm);
              break;
            case '2':
              const searchDirector = await userInterface.promptSearchDirector();
              searchResults = movieManager.searchMoviesByDirector(movies, searchDirector);
              break;
            case '3':
              const searchGenre = await userInterface.promptSearchGenre();
              searchResults = movieManager.searchMoviesByGenre(movies, searchGenre);
              break;
          }
          userInterface.displaySearchResults(searchResults);
          break;
        case '6':
          const filterOption = await userInterface.displayFilterMenu();
          let filterResults = [];
          switch (filterOption) {
            case '1':
              const filterGenre = await userInterface.promptFilterGenre();
              filterResults = movieManager.filterMoviesByGenre(movies, filterGenre);
              break;
            case '2':
              const filterReleaseYear = await userInterface.promptFilterReleaseYear();
              filterResults = movieManager.filterMoviesByReleaseYear(movies, filterReleaseYear);
              break;
          }
          userInterface.displayFilterResults(filterResults);
          break;
        case '7':
          console.log('Exiting the program...');
          process.exit();
        default:
          console.log('Invalid option. Please try again.');
      }
    }
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

start();
