import React from 'react';
import { MdPerson, MdPeople, MdEqualizer, MdApps } from 'react-icons/md';

const menuElems = [
  {
    key: 0,
    to: '/',
    label: 'Home',
    logo: <MdPerson />,
  },
  {
    key: 1,
    to: '/students',
    label: 'Students',
    logo: <MdEqualizer />,
  },
  {
    key: 2,
    to: '/friends',
    label: 'Friends',
    logo: <MdPeople />,
  },
  {
    key: 3,
    to: '/apps',
    label: '42 Apps',
    logo: <MdApps />,
  },
];

export default menuElems;
