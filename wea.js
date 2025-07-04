// 

// wea.js (ES Module syntax)

import fetch from 'node-fetch';

const url = "https://api.ambeedata.com/latest/by-lat-lng";
const headers = {
  "x-api-key": "83008cba6f00d16471b58fef5b0730529cc304348f0aca2181b47c630fba685a",
  "Content-type": "application/json"
};

const params = new URLSearchParams({
  lat: "25.671704",
  lng: "55.742820"
});

fetch(`${url}?${params.toString()}`, {
  method: "GET",
  headers: headers
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Air Quality Data:", data);
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
