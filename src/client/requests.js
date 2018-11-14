import * as Axios from 'axios';
import { values } from 'ramda';

const chartsToken = localStorage.getItem('chartsToken');

const axios = Axios.create({
  baseURL: 'http://localhost:3000/',
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
    .catch(err => {
      throw err;
    });

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

export const getUsersByPromo = (
  promo,
  limit = 50,
  offset = 0,
  orderBy = 'level',
) =>
  axios({
    method: 'get',
    url: `users?promo=${promo}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`,
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

export const reqGetMyLogs = () =>
  axios({
    method: 'get',
    url: 'users/me/logs',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const reqGetInfos = () =>
  axios({
    method: 'get',
    url: 'infos',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const reqGetUsersRatio = (promo = '2013', sortBy = 'level') =>
  axios({
    method: 'get',
    url: `usersratio?promo=${promo !== 'all' ? promo : ''}&sortBy=${sortBy}`,
  })
    .then(res => values(res.data))
    .catch(err => {
      throw err;
    });
