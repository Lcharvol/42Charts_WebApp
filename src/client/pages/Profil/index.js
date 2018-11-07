import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import { map, find, propEq, isNil, isEmpty } from 'ramda';

import { Container, Header, LeftSide, RightSide, Content } from './styles';
import { getMe, getMarks } from '../../selectors/me';
import { enhanceMe } from '../../actions/me';
import UserAvatar from '../../components/UserAvatar';
import LevelBar from '../../components/LevelBar';
import Mark from '../../components/Mark';
import InfoContainer from './InfoContainer';
import Box from '../../containers/Box';

const proptypes = {
  me: object,
  selectedCursus: number.isRequired,
  handleChangeSelectedCursus: func.isRequired,
};

const getLevelFromCursus = (cursusId, cursus) => {
  const selectedCursusObject = find(propEq('id', cursusId))(cursus);
  if (!isNil(selectedCursusObject)) return selectedCursusObject.level;
  else if (!isEmpty(cursus)) return cursus[0].level;
  return 0;
};

const Profil = ({ me, selectedCursus, handleChangeSelectedCursus, marks }) => (
  <Container>
    <Header>
      <LeftSide>
        <UserAvatar
          profilPicture={me.imageUrl}
          width={'150px'}
          height={'150px'}
        />
        <InfoContainer selectedCursus={selectedCursus} me={me} />
      </LeftSide>
      <RightSide>
        <LevelBar level={getLevelFromCursus(selectedCursus, me.cursus || [])} />
      </RightSide>
    </Header>
    <Content>
      <Box
        label={'Marks'}
        width={'300px'}
        height={'400px'}
        content={map(
          mark => (
            <Mark key={mark.id} />
          ),
          marks,
        )}
      />
    </Content>
  </Container>
);

Profil.propTypes = proptypes;

const actions = { enhanceMe };

const mapStateToProps = state => ({
  me: getMe(state),
  marks: getMarks(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    ({ initialSelectedCursus = 1 }) => ({
      selectedCursus: initialSelectedCursus,
    }),
    {
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
    },
  ),
);

export default enhance(Profil);
