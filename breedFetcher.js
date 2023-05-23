
//request module
const request = require('request');

//get command-line arguments
const args = process.argv;
const breedName = args.splice(2);

//connection function to get from URL and call the callback function
const connection = (functionToRunFetchData) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) {
      //callback function
      functionToRunFetchData(body);
    } else {
      console.log("ERROR: URL is not valid");
    }
  });
}

//callback function implementation
const fetchData = (body) => {
  const data = JSON.parse(body);

  //if requested breed not found
  if (data.length == 0) {
    console.log("Message: Requested breed is not found");
    return;
  }
  console.log(data[0].description);
}

//call connection function
connection(fetchData);