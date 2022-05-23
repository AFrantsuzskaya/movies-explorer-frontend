class Api {
  constructor({ address }) {
    this._address = address;
  }

  getUserInfo() {
    return fetch(`http://84.252.136.67:3001/users/me`, {
         method: 'GET',
        credentials: 'same-origin',
         headers: {
         Accept: 'application/json',
          'Content-Type': 'application/json',
          //'Access-Control-Allow-Credentials': true,
          }
     })
     .then(res => {
       console.log(document.cookie)
       console.log(res)
       if (res.ok) {
        return res.json();
     } 
        return Promise.reject("ошибка СЕРВЕРА");
    })
   //return this._get("users/me");
  }

  getMovies() {
    const res = this._get("movies");
    return res;
  }

  setUserInfo(name, email) {
    return this._set("users/me", "PATCH", { name, email });
  }

  setMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN
  ) {
    return this._set("movies", "POST", {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    });
  }

  removeMovie(id) {
    return this._set(`movies/${id}`, "DELETE", {});
  }

  _get(query) {
    const options = {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(query)
    return fetch(this.createUrl(query), options).then(this._checkResponse);
  }

  _set(query, method, body) {
    const options = {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(body),
    };
    return fetch(this.createUrl(query), options).then(this._checkResponse);
  }

  _checkResponse(res) {
    console.log(res);
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  createUrl(query) {
    return `${this._address}/${query}`;
  }
}

const api = new Api({
  address: "http://84.252.136.67:3001",
});

export default api;
// address: "https://backend.movies.students.nomoredomains.xyz",