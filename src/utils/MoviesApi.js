const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

function moviesApi() {
  return fetch(`${MOVIES_URL}`).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log("Error"));
  });
}

export default moviesApi;
