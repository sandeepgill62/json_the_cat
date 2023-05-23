//request module
const request = require('request');

// fetch API data according to breed name
const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //convert data into JSON object format
    const data = JSON.parse(body);
    //get description from data
    const description = data[0].description;
    //call function
    callback(error, description);
  });
};

//export module
module.exports = { fetchBreedDescription };