import * as Axios from 'axios';

const code =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDU2LCJpYXQiOjE1NDE1MTM2NzgsImV4cCI6MTU0MTUyMDg3OH0.5jQx7FXqoOHATmYDjY4JV_aaL10HYCdXLpU9O_KOjZQ';

const axios = Axios.create({
  baseURL: 'http://e3r3p12:3000/',
  headers: { Authorization: 'Bearer ' + code },
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
    code,
  })
    .then(res => res.data)
    .catch(err => console.log('err: ', err));

export const getLogin = () =>
  axios({
    method: 'get',
    url: 'oauth/login',
  })
    .then(ret => ret.data.redirect_uri)
    .catch(err => console.log('err: ', err));

export const postLogin = () =>
  axios({
    method: 'post',
    url: 'oauth/login',
  })
    .then(data => console.log('data: ', data))
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
