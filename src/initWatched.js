import { fetchMoviesById } from "./services/movies-api";
import initMoviePage from "./initFilmPage";

const initWatched = () => {
  document.querySelector(".js-main").innerHTML = `
  <div class="container">
  <ul class="movies-list" id="movies-list"></ul>
  <button class="scrollTopButton"></button>
  </div>
  `;
  const getWatchedMovies = () => {
    let watchedFilms = localStorage.getItem("watched");
    if (!watchedFilms) {
      watchedFilms = [];
    } else {
      watchedFilms = JSON.parse(watchedFilms);
    }
    if (!watchedFilms) {
      localStorage.setItem("watched", []);
      watchedFilms = [];
    }
    const films = watchedFilms.reduce((acc, item) => {
      const { id, backdrop_path, title } = item;
      return (acc += `
          <li data-id="${id}" class="movie">
            <img class="poster" src="${backdrop_path}" />
            <h2 class="movie-title">${title}</h2>
            <div class="inner"></div>
            </li>
          `);
    }, "");

    // .insertAdjacentHTML("beforeend", films);
    document.querySelector("#movies-list").innerHTML = films;

    document.querySelector("#movies-list").addEventListener("click", e => {
      if (e.target.closest(".movie")) {
        let filmId = e.target.closest(".movie").dataset.id;
        fetchMoviesById(filmId).then(data => {
          initMoviePage(data);
        });
      }
    });
  };
  getWatchedMovies();
};

export default initWatched;
