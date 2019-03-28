import Cookies from 'js-cookie';

const queryString = require('query-string');

export const setToken = (url) => {
  const search = queryString.parse(url);
  if (search.token) {
    Cookies.set('token', search.token, {expires: 1});
  }
};
