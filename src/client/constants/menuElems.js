import React from 'react';
import { MdFace, MdPeopleOutline, MdContacts } from 'react-icons/md';

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
  {
    key: 2,
    to: '/friends',
    label: 'Friends',
    logo: <MdContacts />,
  },
];

export default menuElems;
