import * as Axios from 'axios';

const code =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDU2LCJpYXQiOjE1NDE0OTQ1NTEsImV4cCI6MTU0MTUwMTc1MX0.wVIIr15xbCR6dgc6mvIz6aeEX3wRSu20kRIBx16I8Cw';

const axios = Axios.create({
  baseURL: 'http://e1r3p16:3000/',
  headers: { Authorization: 'Bearer ' + code },
});

export const reqPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(res => res.data)
    .catch(err => console.log('err: ', err));

export const reqMe = () =>
  axios({
    method: 'get',
    url: 'users/me',
    code,
  })
    .then(data => console.log('data: ', data))
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
