export const MOVIES_URL = "https://api.nomoreparties.co";

export function filterNameMovies(values, cardsList) {
  const filterFilmsList = cardsList.filter((el) => {
    return String(el.nameRU).toLowerCase().includes(values.toLowerCase());
  });
  return filterFilmsList;
}

export function filterShortMovies(cards) {
  const newCardsList = cards.filter((el) => el.duration < 40);
  //setShortFilmsList(newCardsList);
  return newCardsList;
}
