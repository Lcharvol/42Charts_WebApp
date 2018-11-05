import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3004/',
  headers: { 'X-Custom-Header': 'foobar' },
});

export const reqPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(data => console.log('data: ', data``))
    .catch(err => console.log('err: ', err));
