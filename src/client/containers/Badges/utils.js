import GOLD1 from '../../../../public/gold1.png';
import GOLD2 from '../../../../public/gold2.png';
import GOLD3 from '../../../../public/gold3.png';

export const getBadgeIconFromLevel = level => {
  if (level < 5) return GOLD1;
  else if (level < 15) return GOLD2;
  return GOLD3;
};

export const getBadgeIconFromLogTime = logTimeInSec => {
  if (logTimeInSec < 8640000) return GOLD1;
  else if (logTimeInSec < 17280000) return GOLD2;
  return GOLD3;
};
