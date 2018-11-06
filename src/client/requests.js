import * as Axios from 'axios';

const chartsToken = localStorage.getItem('chartsToken');

console.log('chartsToken: ', chartsToken);

const axios = Axios.create({
  baseURL: 'http://e3r3p12:3000/',
  headers: {
    Authorization: 'Bearer ' + chartsToken,
    ContentType: 'application/json',
  },
});

export const reqPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const reqMe = () =>
  axios({
    method: 'get',
    url: 'users/me',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const getLogin = () =>
  axios({
    method: 'get',
    url: 'oauth/login',
  })
    .then(ret => ret.data.redirect_uri)
    .catch(err => console.log('err: ', err));

export const postLogin = code =>
  axios({
    method: 'post',
    url: 'oauth/login',
    data: {
      code,
      redirect_uri: 'http://localhost:8080/login',
    },
  })
    .then(res => res.data.jwt)
    .catch(err => {
      throw err;
    });

export const getUsersByPromo = (promo, limit = 50, offset = 0) =>
  axios({
    method: 'get',
    url: `users?promo=${promo}&limit=${limit}&offset=${offset}`,
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const reqGetPromo = () =>
  axios({
    method: 'get',
    url: 'promos',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
