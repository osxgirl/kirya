
console.log("testing...")
// test that we can get data from the backend
const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/test`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

fetch(`${BACKEND_URL}/index`)
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));

//images
function fetchImages() {
  return fetch(`${BACKEND_URL}/show`)
    .then(response => response.json())
};
document.addEventListener('DOMContentLoaded', () => {
  fetchImages()
    .then(results => console.log(results));
});

