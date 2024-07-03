const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function displayMainMenu() {
  console.log('===== Movie Catalog =====');
  console.log('1. Display Movie Catalog');
  console.log('2. Add New Movie');
  console.log('3. Update Movie Details');
  console.log('4. Delete Movie');
  console.log('5. Search and Filter');
  console.log('6. Fetch Movie Data');
  console.log('7. Exit');
  return prompt('Select an option: ');
}
async function promptNewMovie() {
  console.log('===== Add New Movie =====');
  const title = await prompt('Enter the movie title: ');
  const year = parseInt(await prompt('Enter the release year: '));
  const genre = await prompt('Enter the genre: ');
  const director = await prompt('Enter the director: ');
  return { title, year, genre, director };
}

async function promptUpdatedMovie() {
  console.log('===== Update Movie Details =====');
  const index = parseInt(await prompt('Enter the index of the movie to update: '));
  const title = await prompt('Enter the updated title: ');
  const year = parseInt(await prompt('Enter the updated release year: '));
  const genre =await prompt('Enter the updated genre: ');
  const director =await prompt('Enter the updated director: ');
  return { index, movie: { title, year, genre, director } };
}

async function promptMovieToDelete() {
  console.log('===== Delete Movie =====');
  const index = parseInt(await prompt('Enter the index of the movie to delete: '));
  return { index };
}

async function displaySearchMenu() {
  console.log('===== Search Movies =====');
  console.log('1. Search by Title');
  console.log('2. Search by Director');
  console.log('3. Search by Genre');
  return await prompt('Select an option: ');
}

async function promptSearchTerm() {
  console.log('===== Search Movies by Title =====');
  return await prompt('Enter the search term: ');
}

async function promptSearchDirector() {
  console.log('===== Search Movies by Director =====');
  return await prompt('Enter the director: ');
}

async function promptSearchGenre() {
  console.log('===== Search Movies by Genre =====');
  return await prompt('Enter the genre: ');
}

async function displayFilterMenu() {
  console.log('===== Filter Movies =====');
  console.log('1. Filter by Genre');
  console.log('2. Filter by Release Year');
  return await prompt('Select an option: ');
}

async function promptFilterGenre() {
  console.log('===== Filter Movies by Genre =====');
  return await prompt('Enter the genre: ');
}

async function promptFilterReleaseYear() {
  console.log('===== Filter Movies by Release Year =====');
  return parseInt(await prompt('Enter the release year: '));
}

function displaySearchResults(movies) {
  console.log('===== Search Results =====');
  if (movies.length === 0) {
    console.log('No movies found.');
  } else {
    movies.forEach((movie) => {
      console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
    });
  }
}

 function displayFilterResults(movies) {
  console.log('===== Filter Results =====');
  if (movies.length === 0) {
    console.log('No movies found.');
  } else {
    movies.forEach((movie) => {
      console.log(`${movie.title} (${movie.year}) - ${movie.genre}`);
    });
  }
}

module.exports = {
  displayMainMenu,
  promptNewMovie,
  promptUpdatedMovie,
  promptMovieToDelete,
  displaySearchMenu,
  promptSearchTerm,
  promptSearchDirector,
  promptSearchGenre,
  displayFilterMenu,
  promptFilterGenre,
  promptFilterReleaseYear,
  displaySearchResults,
  displayFilterResults,
};
