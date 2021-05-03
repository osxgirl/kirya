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
  
      alert("Love you too! ❤️🧡💛💚💙💜");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("whoops 🙈 Something went wrong!");
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
        p2.innerHTML="<img src=\"images/Babaji.png\">";
        document.body.appendChild(p2);
        
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Lahiri+original+photo.png\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Jesus+Heather+small.png\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Yukteswar+Heather.png\">";
        document.body.appendChild(p2);
    
        var p2 = document.createElement('p2');
        p2.innerHTML="<img src=\"images/Yogananda+Ananda+Temple.png\">";
        document.body.appendChild(p2);

});







    
fetch(`${BACKEND_URL}/videos`)
.then(function(response) {
  console.log(response);
  return response.json();
})
.then(function(json) {
  console.log(json);
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



//
//
//
//function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.
//     testAPI();
//   } else {                                 // Not logged into your webpage or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this webpage.';
//   }
// }
//
