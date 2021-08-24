const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    }
    else if(request.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });
  
  // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.open('GET', resource);
  request.send();
};

getTodos('todos/jaid.json', (err, data) => {
  if(err) {
    console.log(err);
  } 
  else {
    console.log(data);
  }
});

getTodos('todos/hugo.json', (err, data) => {
  if(err) {
    console.log(err);
  } 
  else {
    console.log(data);
  }
});

getTodos('todos/joseph.json', (err, data) => {
  if(err) {
    console.log(err);
  } 
  else {
    console.log(data);
  }
});