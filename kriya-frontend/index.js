const port = 'http://localhost:3000'
const commentApi = new CommentApi(port)
const videoApi = new VideoApi(port)
const imageApi = new ImageApi(port)

const nameInput = document.getElementById('image-name')
const urlInput = document.getElementById('image-url')
const comInput = document.getElementById('com-post')
const ilist = document.getElementById('video-list')
const list = document.getElementById('image-list')
const form = document.getElementById('image-form')


videoApi.getVideos()
imageApi.getImages()
commentApi.getComments()

function handleSubmit(e){
   e.preventDefault()
   imageApi.createImage()
   e.target.reset()
}







function createQuote(event) {
  event.preventDefault();
  const ulItem = document.getElementById("quotes");
  const formInput = document.getElementById("new-quote-description");
  let newQuote = formInput.value;
  const insertElement = document.createElement('li');
  insertElement.innerText = newQuote;
    
  ulItem.appendChild(insertElement);
};


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-quote-form");
  form.addEventListener("submit", createQuote);
});






function fetchImages() {
  return fetch(`http://localhost:3000/images`)
    .then(response => response.json())
};

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







form.addEventListener('submit', handleSubmit)

function renderComments(arg){
    const comments = arg["data"]
    comments.forEach(element => {
        new Comment(element)
        renderComment(element)
    })
}


function renderVideos(arg){
    const videos = arg["data"]
    videos.forEach(element => {
        new Video(element)
        renderVideo(element)
    })
}

function renderImages(arg){
    const images = arg["data"]
    images.forEach(element => {
        new Image(element)
        renderImage(element)
    })
}









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



fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  console.log(`Holy cow! There are ${json["number"]} humans in space.`);
});
