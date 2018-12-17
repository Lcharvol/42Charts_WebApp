import GOLD1 from '../../../../public/gold1.png';
import GOLD2 from '../../../../public/gold2.png';
import GOLD3 from '../../../../public/gold3.png';
import SILVER1 from '../../../../public/silver1.png';
import SILVER2 from '../../../../public/silver2.png';
import SILVER3 from '../../../../public/silver3.png';
import BRONZE1 from '../../../../public/bronze1.png';
import BRONZE2 from '../../../../public/bronze2.png';
import BRONZE3 from '../../../../public/bronze3.png';
import PLATINIUM1 from '../../../../public/plat1.png';
import PLATINIUM2 from '../../../../public/plat2.png';
import PLATINIUM3 from '../../../../public/plat3.png';

export const getBadgeIconFromLevel = level => {
  if (level < 1) return BRONZE1;
  else if (level < 3) return BRONZE2;
  else if (level < 5) return BRONZE3;
  else if (level < 7) return SILVER1;
  else if (level < 9) return SILVER2;
  else if (level < 11) return SILVER3;
  else if (level < 13) return GOLD1;
  else if (level < 15) return GOLD2;
  else if (level < 17) return GOLD3;
  else if (level < 18) return PLATINIUM1;
  else if (level < 19) return PLATINIUM2;
  else if (level < 20) return PLATINIUM3;
  return GOLD3;
};

export const getBadgeIconFromLogTime = logTimeInSec => {
  if (logTimeInSec < 864000) return BRONZE1;
  // 10 days
  else if (logTimeInSec < 1728000) return BRONZE2;
  // 20 days
  else if (logTimeInSec < 2592000) return BRONZE3;
  // 30 days
  else if (logTimeInSec < 4320000) return SILVER1;
  // 50 days;
  else if (logTimeInSec < 5184000) return SILVER2;
  // 60 days
  else if (logTimeInSec < 6048000) return SILVER3;
  // 70 days
  else if (logTimeInSec < 8640000) return GOLD1;
  // 100days
  else if (logTimeInSec < 11232000) return GOLD2;
  // 130 days
  else if (logTimeInSec < 15120000) return GOLD3; // 175 days
  return GOLD3;
};
