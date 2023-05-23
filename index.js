// index.js
const { fetchBreedDescription } = require('./breedFetcher');

// command line argument
const breedName = process.argv[2];

// call function
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});