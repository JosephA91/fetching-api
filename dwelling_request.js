const getDwellings = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
      callback(undefined, request.responseText);
    }
    else if(request.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });
  
  request.open('GET', 'https://morning-depths-03731.herokuapp.com/dwellings');
  request.send();
};

getDwellings((err, data) => {
  if(err) {
    console.log(err);
  } 
  else {
    console.log(data);
  }
});