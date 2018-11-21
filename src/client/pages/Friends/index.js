import React from 'react';
import { isEmpty, map } from 'ramda';
import {
  compose,
  withStateHandlers,
  lifecycle,
  onlyUpdateForKeys,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { array } from 'prop-types';

import {
  Container,
  Header,
  Title,
  Content,
  UsersPrewiewContainer,
} from './styles';
import { getMyFriends } from '../../selectors/me';
import PromoFilter from '../../containers/PromoFilter';
import { getPromos } from '../../selectors/app';
import { loadPromos } from '../../actions/app';
import { reqGetPromo } from '../../requests';
import { ALL_PROMO_SELECTED } from '../Students/constants';
import UserPreview from '../../components/UserPreview';

const proptypes = {
  friends: array.isRequired,
};

const Friends = ({
  friends,
  promos,
  selectedPromo,
  filterBy,
  handleChangeSelectedPromo,
  handleChangeFilterBy,
}) => (
  <Container>
    <Header>
      <Title>Friends</Title>
      <PromoFilter
        promos={promos}
        selectedPromo={selectedPromo}
        handleChangeSelectedPromo={handleChangeSelectedPromo}
        filterBy={filterBy}
        handleChangeFilterBy={handleChangeFilterBy}
        usable
        handleChangeSearchValue={() => {}}
        searchValue={''}
      />
    </Header>
    <Content>
      <UsersPrewiewContainer>
        {map(
          user => (
            <UserPreview myLogin={myLogin} key={user.id} user={user} />
          ),
          friends,
        )}
      </UsersPrewiewContainer>
    </Content>
  </Container>
);

Friends.propTypes = proptypes;

const mapStateToProps = state => ({
  friends: getMyFriends(state),
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
    ({ initialSelectedPromo = '', initialFilterBy = 0 }) => ({
      selectedPromo: initialSelectedPromo,
      filterBy: initialFilterBy,
    }),
    {
      handleChangeSelectedPromo: () => newPromo => ({
        selectedPromo: newPromo,
      }),
      handleChangeFilterBy: () => newFilter => ({
        filterBy: newFilter,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.handleChangeSelectedPromo(ALL_PROMO_SELECTED);
      if (isEmpty(this.props.promos)) {
        reqGetPromo()
          .then(res => this.props.loadPromos(res))
          .catch(err => err);
      }
    },
    componentDidUpdate(prevProps) {},
  }),
  onlyUpdateForKeys(['friends', 'promos', 'selectedPromo']),
);
export default enhance(Friends);
