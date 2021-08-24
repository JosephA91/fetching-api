// Fetch API:

// Fetch data
// Return the reponse from promise
// Access data
// Handle error

fetch('todos/jaid.json').then((response) => {
  console.log('resolved', response);
  return response.json();
}).then(data => {
  console.log(data);
}).catch((err) => {
  console.log('rejected', err);
});