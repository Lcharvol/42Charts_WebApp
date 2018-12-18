import { isNil, length, filter, propEq } from 'ramda';

import GOLD1 from '../../public/gold1.png';
import GOLD2 from '../../public/gold2.png';
import GOLD3 from '../../public/gold3.png';
import SILVER1 from '../../public/silver1.png';
import SILVER2 from '../../public/silver2.png';
import SILVER3 from '../../public/silver3.png';
import BRONZE1 from '../../public/bronze1.png';
import BRONZE2 from '../../public/bronze2.png';
import BRONZE3 from '../../public/bronze3.png';
import PLATINIUM1 from '../../public/plat1.png';
import PLATINIUM2 from '../../public/plat2.png';
import PLATINIUM3 from '../../public/plat3.png';
import DIAMOND1 from '../../public/diamond1.png';
import DIAMOND2 from '../../public/diamond2.png';
import DIAMOND3 from '../../public/diamond3.png';

export const getFormatedLogtime = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '0 h 0 min';
  const hours = Math.floor(logtimeInSeconds / 60 / 60);
  const min = Math.floor((logtimeInSeconds - hours * 60 * 60) / 60);
  return `${hours} h ${min} min`;
};

export const getFormatedLogtimeInDay = logtimeInSeconds => {
  if (isNil(logtimeInSeconds)) return '0 D 0 H';
  const days = Math.floor(logtimeInSeconds / 86400);
  const hours = Math.floor((logtimeInSeconds - days * 86400) / 3600);
  return `${days} D ${hours} H`;
};

export const isMyFriend = (userId, friends) =>
  length(filter(propEq('id', userId))(friends)) > 0;

export const getSmicFromLog = logtimeInSeconds => {
  const hours = Math.floor(logtimeInSeconds / 3600);
  return `${Math.floor(hours * 7.83)} € S.M.I.C (net)`;
};

export const getRandomNumber = (min, max) =>
  Math.round(min + Math.random() * (max - min));

export const getBadgeIconFromLevel = level => {
  if (level < 1) return { icon: BRONZE1 };
  else if (level < 3) return { icon: BRONZE2 };
  else if (level < 5) return { icon: BRONZE3 };
  else if (level < 7) return { icon: SILVER1 };
  else if (level < 9) return { icon: SILVER2 };
  else if (level < 11) return { icon: SILVER3 };
  else if (level < 13) return { icon: GOLD1 };
  else if (level < 15) return { icon: GOLD2 };
  else if (level < 17) return { icon: GOLD3 };
  else if (level < 18) return { icon: PLATINIUM1 };
  else if (level < 19) return { icon: PLATINIUM2 };
  else if (level < 20) return { icon: PLATINIUM3 };
  else if (level < 21) return { icon: DIAMOND1 };
  else if (level < 22) return { icon: DIAMOND2 };
  return { icon: DIAMOND3 };
};

export const getBadgeIconFromLogTime = logTimeInSec => {
  if (isNil(logTimeInSec)) return '';
  else if (logTimeInSec < 864000)
    return {
      icon: BRONZE1,
      hoverValue: 1,
    };
  // 10 days
  else if (logTimeInSec < 1728000)
    return {
      icon: BRONZE2,
      hoverValue: 10,
    };
  // 20 days
  else if (logTimeInSec < 2592000)
    return {
      icon: BRONZE3,
      hoverValue: 20,
    };
  // 30 days
  else if (logTimeInSec < 4320000)
    return {
      icon: SILVER1,
      hoverValue: 30,
    };
  // 50 days;
  else if (logTimeInSec < 5184000)
    return {
      icon: SILVER2,
      hoverValue: 50,
    };
  // 60 days
  else if (logTimeInSec < 6048000)
    return {
      icon: SILVER3,
      hoverValue: 60,
    };
  // 70 days
  else if (logTimeInSec < 8640000)
    return {
      icon: GOLD1,
      hoverValue: 70,
    };
  // 100days
  else if (logTimeInSec < 11232000)
    return {
      icon: GOLD2,
      hoverValue: 100,
    };
  // 130 days
  else if (logTimeInSec < 15120000)
    return {
      icon: GOLD3,
      hoverValue: 130,
    };
  // 175 days
  else if (logTimeInSec < 17280000)
    return {
      icon: PLATINIUM1,
      hoverValue: 175,
    };
  // 200 days
  else if (logTimeInSec < 19872000)
    return {
      icon: PLATINIUM2,
      hoverValue: 200,
    };
  // 230 days
  else if (logTimeInSec < 23760000)
    return {
      icon: PLATINIUM3,
      hoverValue: 230,
    };
  // 275 days
  else if (logTimeInSec < 25920000)
    return {
      icon: DIAMOND1,
      hoverValue: 275,
    };
  // 300 days
  else if (logTimeInSec < 34560000)
    return {
      icon: DIAMOND2,
      hoverValue: 300,
    }; // 400 days
  return {
    icon: DIAMOND3,
    hoverValue: 400,
  };
};

export const getBadgeIconFromCoalitionScore = coalitonScore => {
  0;
  if (coalitonScore < 10 || isNil(coalitonScore)) return { icon: BRONZE1 };
  else if (coalitonScore < 20) return { icon: BRONZE2 };
  else if (coalitonScore < 50) return { icon: BRONZE3 };
  else if (coalitonScore < 100) return { icon: SILVER1 };
  else if (coalitonScore < 150) return { icon: SILVER2 };
  else if (coalitonScore < 200) return { icon: SILVER3 };
  else if (coalitonScore < 250) return { icon: GOLD1 };
  else if (coalitonScore < 300) return { icon: GOLD2 };
  else if (coalitonScore < 350) return { icon: GOLD3 };
  else if (coalitonScore < 400) return { icon: PLATINIUM1 };
  else if (coalitonScore < 450) return { icon: PLATINIUM2 };
  else if (coalitonScore < 500) return { icon: PLATINIUM3 };
  else if (coalitonScore < 550) return { icon: DIAMOND1 };
  else if (coalitonScore < 600) return { icon: DIAMOND2 };
  return { icon: DIAMOND3 };
};
