import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty, fromPairs } from 'ramda';

import {
  Container,
  TopSide,
  BottomSide,
  Title,
  Header,
  Content,
} from './styles';
import UsersByLevel from '../../containers/UsersByLevel';
import {
  getUsersByLevels,
  getTotalUsers,
  getPromos,
} from '../../selectors/app';
import PromoFilter from './PromoFilter';
import { reqGetPromo } from '../../requests';
import { loadPromos } from '../../actions/app';
import { ALL_PROMO_SELECTED } from '../Students/constants';

const Users = ({
  usersByLevels,
  totalUsers,
  promos,
  selectedPromo,
  handleChangeSelectedPromo,
}) => (
  <Container>
    <Header>
      <Title>All Students</Title>
      <PromoFilter
        promos={promos}
        selectedPromo={selectedPromo}
        handleChangeSelectedPromo={handleChangeSelectedPromo}
      />
    </Header>
    <Content>
      <TopSide>
        <UsersByLevel usersByLevels={usersByLevels} totalUsers={totalUsers} />
      </TopSide>
      <BottomSide />
    </Content>
  </Container>
);

const mapStateToProps = state => ({
  usersByLevels: getUsersByLevels(state),
  totalUsers: getTotalUsers(state),
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
    ({ initialSelectedPromo = '' }) => ({
      selectedPromo: initialSelectedPromo,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.promos)) {
        reqGetPromo()
          .then(res => this.props.loadPromos(res))
          .catch(err => err);
      }
      this.props.handleChangeSelectedPromo(ALL_PROMO_SELECTED);
    },
  }),
);
export default enhance(Users);
