// const genreUrl = "DitWerktZekerNiet";
const favUrl = `https://api.themoviedb.org/3/find/tt0095756?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const genresList = document.getElementById("genres");
    const genres = await getData(genreUrl);
    genres.genres.forEach((genre) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `Genre: ${genre.name}, Id: ${genre.id}`;
      genresList.append(newLi);
    });
  } catch (err) {
    console.log("Error! (genresList)");
    console.log(err);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const favoriteList = document.getElementById("favorite");
    const favMovie = await getData(favUrl);
    let newLi = document.createElement("li");
    newLi.innerHTML = `Title: ${favMovie.movie_results[0].title}`;
    favoriteList.append(newLi);
  } catch (err) {
    console.log("Error! (favMovie)");
    console.log(err);
  }
});

function addTop10toDOM(htmlId, searchString) {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const topURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_watch_monetization_types=flatrate${searchString}`;
      const topRatedList = document.getElementById(htmlId);
      const topRated = await getData(topURL);
      var i = 0;
      while (i < 10) {
        movie = topRated.results[i];
        let newLi = document.createElement("li");
        newLi.innerHTML = `Name: ${movie.original_title}, Id: ${movie.id}`;
        topRatedList.append(newLi);
        i++;
      }
    } catch (err) {
      console.log("Error! (topRatedList)");
      console.log(err);
    }
  });
}

addTop10toDOM("top-rated", "");
addTop10toDOM("top-action", "&with_genres=878");
addTop10toDOM("year1975", "&year=1975");

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const topURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;
//     const topRatedList = document.getElementById("toprated");
//     const topRated = await getData(topURL);
//     var i = 0;
//     while (i < 10) {
//       movie = topRated.results[i];
//       let newLi = document.createElement("li");
//       newLi.innerHTML = `Name: ${movie.original_title}, Id: ${movie.id}`;
//       topRatedList.append(newLi);
//       i++;
//     }
//   } catch (err) {
//     console.log("Error! (topRatedList)");
//     console.log(err);
//   }
// });
