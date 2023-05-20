class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=206d9ad96ee6b7a6700885802eca1ff2&language=en-US&query=${keyword}&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static informationMovie(id) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=206d9ad96ee6b7a6700885802eca1ff2&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${id} is not found`);
        }
      });
  }
}

export default DataSource;
