const BASE_URL = "http://84.252.136.67:3001";
//const BASE_URL = "https://backend.movies.students.nomoredomains.xyz";

function checkResponse(res) {
  //return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  if (res.ok) {
    console.log(res)
    console.log(res.cookie)

    return res.json();
  } else {
    console.log('feghghgm')
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
export const register = ({ password, email, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    //mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
     // "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ password, email, name }),
  }).then(checkResponse);
};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //"Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => checkResponse(res))
   .then((data) => {
      console.log(data);
      //localStorage.setItem('jwt', data.token);
      //localStorage.setItem('email', email);
      return data;
    });
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      //localStorage.setItem('jwt', data.token);
      //localStorage.setItem('email', email);
      return data;
    });
};
