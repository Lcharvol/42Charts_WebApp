import React from 'react';
import { array, number, func } from 'prop-types';
import { length, isNil, isEmpty } from 'ramda';
import { compose, onlyUpdateForKeys, withStateHandlers } from 'recompose';

import {
  Container,
  TopSide,
  BottomSide,
  BarContainer,
  Bar,
  Label,
  HoverContent,
  HoverValue,
  HoverLabel,
} from './styles';
import Separator from '../../../components/Separator';
import { MAIN_COLOR } from '../../../constants/colors';

const proptypes = {
  usersByUnit: array,
  hoveredUnit: number,
  handleChangeHoveredUnit: func.isRequired,
  nbUsers: number.isRequired,
  filterBy: number.isRequired,
};

const getHoverValue = (hoveredUnit, usersByUnit) => {
  return `${!isNil(usersByUnit[hoveredUnit]) ? usersByUnit[hoveredUnit] : ''}`;
};

const getHoverLabel = (hoveredUnit, usersByUnit, nbUsers, filterBy) => {
  if (isNil(usersByUnit[hoveredUnit])) return '';
  const perCent = Math.round((usersByUnit[hoveredUnit] / nbUsers) * 100);
  const setence = filterBy === 0 ? 'lvl' : '';
  return `/ ${nbUsers} students ${setence} ${
    filterBy === 0 ? hoveredUnit : ''
  } (${perCent}%)`;
};

const Graph = ({
  usersByUnit = [],
  nbUsers,
  hoveredUnit,
  handleChangeHoveredUnit,
  filterBy,
}) => (
  <Container>
    <TopSide>
      {(isEmpty(usersByUnit) ? new Array(30).fill(0, 0) : usersByUnit).map(
        (UsersPerUnit, id) => {
          const value =
            nbUsers > 0
              ? nbUsers > 1000
                ? (UsersPerUnit / nbUsers) * 2
                : UsersPerUnit / nbUsers
              : 0;
          return (
            <BarContainer
              key={id}
              valuesLength={length(usersByUnit)}
              value={value}
              onMouseEnter={() => handleChangeHoveredUnit(id)}
              onMouseLeave={() => handleChangeHoveredUnit(undefined)}
            >
              <Bar value={value} valuesLength={length(usersByUnit)} />
            </BarContainer>
          );
        },
      )}
    </TopSide>
    <Separator color={MAIN_COLOR} />
    <BottomSide>
      {usersByUnit.map((user, id) => (
        <Label key={id} />
      ))}
    </BottomSide>
    <HoverContent>
      <HoverValue>{getHoverValue(hoveredUnit, usersByUnit)}</HoverValue>
      <HoverLabel>
        {getHoverLabel(hoveredUnit, usersByUnit, nbUsers, filterBy)}
      </HoverLabel>
    </HoverContent>
  </Container>
);

Graph.propTypes = proptypes;

export default compose(
  withStateHandlers(
    ({ initialHoveredUnit = undefined }) => ({
      hoveredUnit: initialHoveredUnit,
    }),
    {
      handleChangeHoveredUnit: () => id => ({
        hoveredUnit: id,
      }),
    },
  ),
  onlyUpdateForKeys(['usersByUnit', 'hoveredUnit']),
)(Graph);
