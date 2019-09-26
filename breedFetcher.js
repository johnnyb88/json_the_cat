const request = require('request');
let catApi = 'https://api.thecatapi.com/v1/breeds/search?q=';
// API URL/endpoint which will return cat breed results.

const fetchBreedDescription = function(breedName, callback) {
  request(catApi + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      error = "Breed name not found";
      callback(error);
    } else {
      callback(error, data[0]['description']);
    }
  });
  
};



module.exports = { fetchBreedDescription };

// const request = require('request');
// let input = process.argv.slice(2);
// let breed = input[0];
// let catApi = 'https://api.thecatapi.com/v1/breeds/search?q=';
// // API URL/endpoint which will return cat breed results.

// request(catApi + breed, (error, response, body) => {
//   if (error) {
//     if (error.code !== undefined) {
//       console.log("Error, request failed");
//       throw error;
//     }
//   }
//   const data = JSON.parse(body);
//   if (data[0] === undefined) {
//     return console.log("Breed name not found");
//   }
//   console.log(data[0]['description']);
// });