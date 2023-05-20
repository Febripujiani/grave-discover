class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
           <style>
           .movie-card {
            display: flex;
            background: rgb(221, 221, 221);
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(15px);
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
            margin:50px;
            border-radius: 10px;
            overflow: hidden;
          }
          
          .movie-poster {
            flex: 0 0 200px;
            height: 330px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 30px;
          }
          
          .movie-poster img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
          }
          
          .movie-info {
            flex: 1;
            padding: 40px;
          }
          
          .movie-title {
            margin-top: 0;
            font-size: 22px;
            font-weight: bold;
            color: rgb(101, 136, 100);
            font-family: "Inter", sans-serif;
          }
          
          .movie-details {
            display: flex;
            align-items: center;
            margin-bottom: 10px; 
          }
          
          .movie-details p {
            margin-right: 10px;
            font-size: 13px;
            line-height: 1.5;
            color: black;
            font-family: "Inter", sans-serif;
            text-align: justify;
          }
          
          .movie-details p i {
            margin-right: 10px;
            font-size: 20px;
            color: #333;
          }
          
          .synopsis {
            font-size: 15px;
            line-height: 1.5;
            color: black;
            margin-bottom: 5px;
            overflow:hidden; 
            display:-webkit-box; 
            -webkit-line-clamp:10;     
            line-clamp:5; 
            -webkit-box-orient:vertical;
          }


          @media screen and (max-width: 550px){
            .movie-card {
                flex-direction: column;
                position: static;
            }
       
            .movie-info > details {
                width: 100%;
                margin-bottom: 12px;
            }
       
            .movie-action > button {
                width: 100%;
            }
        }
           </style>
           <div class="movie-card">
           <div class="movie-poster">
           <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="${this._movie.name}" />
           </div>

           <div class="movie-info">
           <h2 class="movie-title">${this._movie.title}</h2>
           <div class="movie-details">
           <p class="release-date"><i class="far fa-calendar-alt"></i> ${this._movie.release_date}</p>
           <p class="views"><i class="far fa-eye"></i> ${this._movie.popularity}</p>
           </div>
           <p class="synopsis">${this._movie.overview}</p>
           </div>
           </div>`;
  }
}

customElements.define("movie-item", MovieItem);
