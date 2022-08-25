document.addEventListener("DOMContentLoaded", function () {
  // code here will execute after the document is loaded
});

fetch (
    'https://www.omdbapi.com/?s=batman&apikey=dad045f0'
 )
 .then((response) => { 
     return response.json()
 })
 
function renderMovies() {
 
console.log(movieData);
const container = document.getElementById('results');
///map problem in part 1/////
  
movieData.map(
    
    (item) => {
       console.log(item);
        container.innerHTML +=  `
     <div class="movie" data-imdbid=${item.imdbID}>
     <h2>${item.Title}</h2>
     <h2> ${item.Year}</h2>
     <img src=${item.poster}/>
     <button>${add-button}</button>
    
    </div>`
    
  });

  return movieHtmlArray.join('renderMovies');
  
  movies-container.innerHTML === `${renderMovies(movieData)}`;
}

const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e){
// event listener code goes here
movies-container.innerHTML === `${renderMovies(movieData)}`;
})



document.addEventListener('click', function(event) {
    // code for document click listener goes here
    document.getElementById("movies-container").classList()

const movieID = event.tARGET.dataset.imdbid
console.log(imdbid);
})

function saveToWatchlist(imdb) {
console.log(movieID);
}