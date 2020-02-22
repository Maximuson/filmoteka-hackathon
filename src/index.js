import './styles.css';


function addMySection() {
    `<section class="section" data-id="{id}">
      <div class="poster-wrapper">
        <img src="./images/pic.jpg" alt="poster image" />
      </div>
      <div class="description-wrapper">
      <h2 class="film-title">{title}</h2>
      <div class="vote-wrapper">
        <span class="titles vote-titles">vote / votes: </span>
        <span class="votes-numbers">{vote_average} / {vote_count}</span>
      </div>
      <div class="popularity-wrapper">
        <span class="titles film-popularity">popularity: </span>
        <span class="popularity-score">{popularity}</span>
      </div>
      <div class="original-film-wrapper">
        <span class="titles original-film-titles">original title: </span>
        <span class="original-film-name">{original_title}</span>
      </div>
      <div class="film-genre-wrapper">
        <span class="titles film-genre">genre: </span>
        <span class="genre-list">{genres}</span>
      </div>
      <h3>About</h3>
      <p class="film-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum."
      </p>
      <div class="button-wrapper">
        <button type="button" class="video-icon button-icon" data-id="{{id}}" data-action="watched-films">Add to
          watched</button>
        <button type="button" class="calendar-icon button-icon" data-id="{{id}}" data-action="queue-films">Add to
          queue</button>
      </div> 
    </section>`
}