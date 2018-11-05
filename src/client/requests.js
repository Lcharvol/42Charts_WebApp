import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {},
});

export const reqPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(data => console.log('data: ', data``))
    .catch(err => console.log('err: ', err));

export const reqMe = () =>
  axios({
    method: 'get',
    url: 'me',
  })
    .then(data => console.log('data: ', data``))
    .catch(err => console.log('err: ', err));

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
    code,
    redirect_uri: 'google.com',
  })
    .then(data => console.log('data: ', data``))
    .catch(err => {
      throw err;
    });
