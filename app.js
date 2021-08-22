'use strict'

const fetch = require('node-fetch');

const baseUrl = 'https://morning-depths-03731.herokuapp.com'

// Not in use.
const getDwellingsAsync = async (page = 1) => {
  try {
    const response = await fetch(`${baseUrl}/dwellings?page=${page}`);
    const body = await response.json();
    console.log("Body:", body);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

const getDwellingAsync = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/dwellings/${id}`);
    const body = await response.json();
    return body;
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

const searchDwellingsAsync = async (query) => {
  try {
    const response = await fetch(`${baseUrl}/search?query=${query}`);
    const body = await response.json();
    return body;
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

async function run(search_query = '') {
  try {
    const data = await searchDwellingsAsync(`${search_query}`);
    let result = data.data[0].id;
    let dwelling = await getDwellingAsync(result);
    console.log(dwelling);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

// run(); -> handle errors when empty.
run('39 BEAUFORT STREET, WEST TOODYAY WA 6566');

