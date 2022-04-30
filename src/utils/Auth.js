const BASE_URL = 'https://backend.movies.students.nomoredomains.xyz';

function checkResponse (res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

export const register = (password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email, name})
    })
    .then((res) => checkResponse(res)
      /*if (res.ok) {
        return res.json()
      } else {
        return Promise.reject(res)
      }*/
    )
};

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then((res) => checkResponse(res))
    .then(data => {
      //localStorage.setItem('jwt', data.token);
      //localStorage.setItem('email', email);
      return data;
    });
};

export const logout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST'
      })
      .then((res) => checkResponse(res))
      .then(data => {
        //localStorage.setItem('jwt', data.token);
        //localStorage.setItem('email', email);
        return data;
      });
  };