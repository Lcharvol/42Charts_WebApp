import React from 'react';
import { MdFace, MdPeopleOutline } from 'react-icons/md';

const menuElems = [
  {
    key: 0,
    to: '/',
    label: 'Home',
    logo: <MdFace />,
  },
  {
    key: 1,
    to: '/students',
    label: 'Students',
    logo: <MdPeopleOutline />,
  },
];

export default menuElems;
