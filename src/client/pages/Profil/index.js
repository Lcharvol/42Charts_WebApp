import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { Container, Header, FullName } from './styles';
import { getMe } from '../../selectors/me';
import { enhanceMe } from '../../actions/me';
import UserAvatar from '../../components/UserAvatar';

const Profil = ({ me }) => (
  <Container>
    <Header>
      <UserAvatar
        profilPicture={me.imageUrl}
        width={'150px'}
        height={'150px'}
      />
      <FullName>{me.displayname}</FullName>
    </Header>
  </Container>
);

const actions = { enhanceMe };

const mapStateToProps = state => ({
  me: getMe(state),
});

const enhance = compose(connect(mapStateToProps));
export default enhance(Profil);
