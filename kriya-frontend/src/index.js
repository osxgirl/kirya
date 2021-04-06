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
  return fetch(`${BACKEND_URL}/images`)
    .then(response => response.json())
};
document.addEventListener('DOMContentLoaded', () => {
  fetchImages()
    .then(results => console.log(results));
    
    var p = document.createElement('p');
    p.innerHTML = 'Babaji • Lahiri • Jesus • Yukteswar • Paramahansa';
//    image.style.backgroundColor = '#f9f9f9';
    document.body.appendChild(p);

});

//space people
fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  console.log(`Holy cow! There are ${json["number"]} humans in space.`);
});


