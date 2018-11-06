import React from 'react';
import { map, isEmpty } from 'ramda';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VisibilitySensor from 'react-visibility-sensor';

import {
  Container,
  UsersPrewiewContainer,
  VisibilitySensorBox,
} from './styles';
import PromoFilter from './PromoFilter';
import UserPreview from '../../components/UserPreview';
import { getUsersByPromo } from '../../requests';
import { getPromos } from '../../selectors/app';
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
}) => (
  <Container>
    <PromoFilter
      promos={promos}
      selectedPromo={selectedPromo}
      handleChangeSelectedPromo={handleChangeSelectedPromo}
    />
    <UsersPrewiewContainer>
      {map(
        user => (
          <UserPreview key={user.id} user={user} />
        ),
        users,
      )}
    </UsersPrewiewContainer>
    <VisibilitySensor
      onChange={() => {
        if (!isEmpty(users)) {
          handleChangeStart(start + 25);
          getUsersByPromo(selectedPromo, 25, start)
            .then(res => enhanceUsers(res))
            .catch(err => console.log('err: ', err));
        }
      }}
    >
      <VisibilitySensorBox />
    </VisibilitySensor>
  </Container>
);

const mapStateToProps = state => ({
  promos: getPromos(state),
});

const actions = { loadPromos };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialSelectedPromo = '2013',
      initialUsers = [],
      initialStart = 0,
    }) => ({
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
    },
    componentDidUpdate(prevProps) {
      if (
        prevProps.selectedPromo !== this.props.selectedPromo &&
        isEmpty(this.props.users)
      ) {
        getUsersByPromo(this.props.selectedPromo, 25, this.props.start)
          .then(res => {
            this.props.handleChangeUsers(res);
            this.props.handleChangeStart(this.props.start + 25);
          })
          .catch(err => console.log('err: ', err));
      }
    },
  }),
);
export default enhance(Ranking);
