console.log("connected")

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
  
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

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
    

        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Babaji.jpg\">";
        document.body.appendChild(p2);
        
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Lahiri+original+photo.jpg\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Jesus+Heather+small.jpg\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Yukteswar+Heather.jpg\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Yogananda+Ananda+Temple.jpg\">";
        document.body.appendChild(p2);

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


