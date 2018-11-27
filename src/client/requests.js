import * as Axios from 'axios';
import { values, isNil, length } from 'ramda';

const chartsToken = localStorage.getItem('chartsToken');

console.log('chartsToken: ', chartsToken);

const chartsRefreshToken = localStorage.getItem('chartsRefreshToken');

console.log('chartsRefreshToken: ', chartsRefreshToken);

const axios = Axios.create({
  // baseURL: 'https://api.42charts.fr',
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: 'Bearer ' + chartsToken,
    ContentType: 'application/json',
  },
});

export const reqRefreshToken = () =>
  axios({
    method: 'post',
    url: '/oauth/token',
    data: {
      refreshToken: chartsRefreshToken,
    },
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });

const checkToken = err => {
  if (!isNil(chartsRefreshToken) && length(chartsRefreshToken) > 0) {
    reqRefreshToken()
      .then(res => {
        localStorage.setItem('chartsToken', res.token);
        localStorage.setItem('chartsRefreshToken', res.refreshToken);
      })
      .catch(err => {
        localStorage.setItem('chartsToken', '');
        localStorage.setItem('chartsRefreshToken', '');
        window.location.replace('login');
      });
  }
};

export const reqPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqMe = () =>
  axios({
    method: 'get',
    url: 'users/me',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
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

export const getUsersByPromo = (
  promo,
  limit = 50,
  offset = 0,
  orderBy = 'level',
  search = '',
) =>
  axios({
    method: 'get',
    url: `users?promo=${promo}&limit=${limit}&offset=${offset}&orderBy=${orderBy}&search=${search}`,
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetPromo = () =>
  axios({
    method: 'get',
    url: 'promos',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetMyLogs = () =>
  axios({
    method: 'get',
    url: 'users/me/logs',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetInfos = () =>
  axios({
    method: 'get',
    url: 'infos',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetUsersRatio = (promo = '2013', sortBy = 'level') =>
  axios({
    method: 'get',
    url: `usersratio?promo=${promo !== 'all' ? promo : ''}&sortBy=${sortBy}`,
  })
    .then(res => values(res.data))
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetUserById = id =>
  axios({
    method: 'get',
    url: `users/id/${id}`,
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetUserLogsById = id =>
  axios({
    method: 'get',
    url: `users/id/${id}/logs`,
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetMyFriends = () =>
  axios({
    method: 'get',
    url: 'friends',
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqAddNewFriends = userId =>
  axios({
    method: 'post',
    url: `friends`,
    data: {
      userId,
    },
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqDeleteFriends = userId =>
  axios({
    method: 'delete',
    url: `friends/${userId}`,
  })
    .then(res => res.data)
    .catch(err => {
      checkToken(err);
      throw err;
    });

export const reqGetApps = () =>
  axios({
    method: 'get',
    url: 'apps',
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export const reqLikeApp = appId =>
  axios({
    method: 'post',
    url: `apps/like/${appId}`,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });

export const reqRemoveLikeApp = appId =>
  axios({
    method: 'delete',
    url: `apps/like/${appId}`,
  })
    .then(res => res)
    .catch(err => {
      throw err;
    });
