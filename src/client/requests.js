import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://e3r6p16:3000/',
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
