import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import { find, propEq, isNil, isEmpty } from 'ramda';

import { Container, Header, FullName } from './styles';
import { getMe } from '../../selectors/me';
import { enhanceMe } from '../../actions/me';
import UserAvatar from '../../components/UserAvatar';
import LevelBar from '../../components/LevelBar';
import InfoContainer from './InfoContainer';

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

const Profil = ({ me, selectedCursus, handleChangeSelectedCursus }) => (
  <Container>
    <Header>
      <UserAvatar
        profilPicture={me.imageUrl}
        width={'150px'}
        height={'150px'}
      />
      <InfoContainer me={me} />
      <LevelBar level={getLevelFromCursus(selectedCursus, me.cursus || [])} />
    </Header>
  </Container>
);

Profil.propTypes = proptypes;

const actions = { enhanceMe };

const mapStateToProps = state => ({
  me: getMe(state),
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
