const fs = require('fs');

function readDataFromFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      } else {
        try {
          const movies = JSON.parse(data);
          resolve(movies);
        } catch (parseError) {
          reject(parseError);
        }
      }
    });
  });
}

function writeDataToFile(filename, data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(filename, jsonData, 'utf8', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  readDataFromFile,
  writeDataToFile,
};
