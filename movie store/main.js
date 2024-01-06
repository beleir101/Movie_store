const APILINK =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";

movies(APILINK);
const searched = document.getElementById("searchBar");
const forwhat = document.getElementById("searching");
const contains = document.getElementById("mainpart");
function movies(link) {
  fetch(link)
    .then((movies) => movies.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add(
          "shadow-2xl",
          "p-5",
          "flex",
          "justify-center",
          "flex-col",
          "items-center",
          "w-1/4"
        );
        const image = document.createElement("img");
        /* image.classList.add("imager"); */
        const title = document.createElement("div");
        title.textContent = `Title: ${element.title}`;

        image.src = IMG_PATH + element.poster_path;
        card.appendChild(image);
        card.appendChild(title);
        contains.appendChild(card);
      });
    });
}
searched.addEventListener("submit", (e) => {
  e.preventDefault();
  const mo = forwhat.value;
  contains.innerHTML = "";
  console.log(mo);
  if (mo) {
    movies(SEARCHAPI + mo);
    mo = "";
  }
});
