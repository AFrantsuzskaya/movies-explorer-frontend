class Api {
    constructor({ address }) {
        this._address = address
    }

    getUserInfo() {
        return this._get('users/me')
    }

    getMovies() {
        const res = this._get('movies')        
        return res
     }
    
     setUserInfo(name, email) {
        return this._set('users/me', 'PATCH', {name, email})
    }

    setMovie(country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN) {
        return this._set('movies', 'POST', {country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN})
    }

    removeMovie(id) {
        return this._set(`movies/${id}`, 'DELETE', {});
    }

    _get(query) {
      const options = {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      return fetch(this.createUrl(query), options)
             .then(this._checkResponse)
    }

    _set(query, method, body) {
      const options = {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
      return fetch(this.createUrl(query), options)
             .then(this._checkResponse)
    }
    
    _checkResponse(res) {
      console.log(res)
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }


    createUrl(query) {
      return `${this._address}/${query}`
    }
}

const api = new Api({
  address: 'https://backend.movies.students.nomoredomains.xyz'
})

export default api;
