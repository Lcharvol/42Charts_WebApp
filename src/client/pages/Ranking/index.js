import React from 'react';
import { map, isEmpty } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VisibilitySensor from 'react-visibility-sensor';
import { LOADING_OFFSET } from './constants';

import {
  Container,
  UsersPrewiewContainer,
  VisibilitySensorBox,
  Title,
  Header,
  Content,
} from './styles';
import PromoFilter from './PromoFilter';
import UserPreview from '../../components/UserPreview';
import { getUsersByPromo } from '../../requests';
import { getPromos } from '../../selectors/app';
import { getMyLogin } from '../../selectors/me';
import { reqGetPromo } from '../../requests';
import { loadPromos } from '../../actions/app';

const Ranking = ({
  start,
  promos,
  selectedPromo,
  handleChangeSelectedPromo,
  handleChangeStart,
  enhanceUsers,
  users,
  myLogin,
}) => (
  <Container>
    <Header>
      <Title>Ranking</Title>
      <PromoFilter
        promos={promos}
        selectedPromo={selectedPromo}
        handleChangeSelectedPromo={handleChangeSelectedPromo}
      />
    </Header>
    <Content>
      <UsersPrewiewContainer>
        {users.map((user, id) => (
          <UserPreview
            myLogin={myLogin}
            key={user.id}
            rank={id + 1}
            user={user}
          />
        ))}
      </UsersPrewiewContainer>
      <VisibilitySensor
        onChange={() => {
          if (!isEmpty(users)) {
            handleChangeStart(start + LOADING_OFFSET);
            getUsersByPromo(
              selectedPromo !== 'all' ? selectedPromo : '',
              LOADING_OFFSET,
              start,
            )
              .then(res => enhanceUsers(res))
              .catch(err => console.log('err: ', err));
          }
        }}
      >
        <VisibilitySensorBox />
      </VisibilitySensor>
    </Content>
  </Container>
);

const mapStateToProps = state => ({
  promos: getPromos(state),
  myLogin: getMyLogin(state),
});

const actions = { loadPromos };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialSelectedPromo = '', initialUsers = [], initialStart = 0 }) => ({
      selectedPromo: initialSelectedPromo,
      users: initialUsers,
      start: initialStart,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
        start: 0,
        users: [],
      }),
      handleChangeUsers: () => newUsers => ({
        users: newUsers,
      }),
      handleChangeStart: () => newStart => ({
        start: newStart,
      }),
      enhanceUsers: ({ users }) => newUsers => ({
        users: [...users, ...newUsers],
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.promos)) {
        reqGetPromo()
          .then(res => this.props.loadPromos(res))
          .catch(err => console.log('err: ', err));
      }
      this.props.handleChangeSelectedPromo('2012');
    },
    componentDidUpdate(prevProps) {
      if (
        prevProps.selectedPromo !== this.props.selectedPromo &&
        isEmpty(this.props.users)
      ) {
        getUsersByPromo(
          this.props.selectedPromo !== 'all' ? this.props.selectedPromo : '',
          LOADING_OFFSET,
          this.props.start,
        )
          .then(res => {
            this.props.handleChangeUsers(res);
            this.props.handleChangeStart(this.props.start + LOADING_OFFSET);
          })
          .catch(err => console.log('err: ', err));
      }
    },
  }),
);
export default enhance(Ranking);
