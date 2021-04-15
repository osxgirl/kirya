console.log("connected")

const BACKEND_URL = 'http://localhost:3000';
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
    document.body.appendChild(p);
});

function fetchVideos() {
  return fetch(`${BACKEND_URL}/videos`)
    .then(response => response.json())
};
document.addEventListener('DOMContentLoaded', () => {
  fetchVideos()
    .then(results => console.log(results));
    
});

fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  console.log(`Holy cow! There are ${json["number"]} humans in space.`);
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-quote-form");
  form.addEventListener("submit", createQuote);
});

function createQuote(event) {
  event.preventDefault();
  const ulItem = document.getElementById("quotes");
  const formInput = document.getElementById("new-quote-description");
  let newQuote = formInput.value;
  const insertElement = document.createElement('li');
  insertElement.innerText = newQuote;
    
  ulItem.appendChild(insertElement);
    
  
};
