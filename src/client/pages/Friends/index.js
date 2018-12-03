import React from 'react';
import { isEmpty, map, length } from 'ramda';
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
  Content,
  UsersPrewiewContainer,
  HeaderContent,
} from './styles';
import { getMyFriends, getMyLogin } from '../../selectors/me';
import PromoFilter from '../../containers/PromoFilter';
import Graph from '../../pages/Students/Graph';
import { getPromos, getWinWidth } from '../../selectors/app';
import { loadPromos } from '../../actions/app';
import { removeFriend } from '../../actions/me';
import { reqGetPromo } from '../../requests';
import { ALL_PROMO_SELECTED } from '../Students/constants';
import UserPreview from '../../components/UserPreview';
import Title from '../../components/Title';
import NoFriends from './NoFriends';
import { getFileredAndSortedFriends, getFriendsByUnit } from './utils';

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
  myLogin,
  removeFriend,
  winWidth,
}) => {
  const filteredAndSortedFriends = getFileredAndSortedFriends(
    friends,
    selectedPromo,
    filterBy,
  );
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Graph
            nbUsers={length(filteredAndSortedFriends)}
            usersByUnit={getFriendsByUnit(filteredAndSortedFriends)}
            filterBy={filterBy}
            usersRatioTranches={[]}
          />
          <PromoFilter
            promos={promos}
            selectedPromo={selectedPromo}
            handleChangeSelectedPromo={handleChangeSelectedPromo}
            filterBy={filterBy}
            handleChangeFilterBy={handleChangeFilterBy}
            usable
            handleChangeSearchValue={() => {}}
            searchValue={''}
            displaySearchBar={false}
          />
        </HeaderContent>
      </Header>
      <Content>
        {length(filteredAndSortedFriends) === 0 && (
          <NoFriends selectedPromo={selectedPromo} />
        )}
        <UsersPrewiewContainer>
          {map(
            user => (
              <UserPreview
                myLogin={myLogin}
                key={user.id}
                user={user}
                removeFriend={removeFriend}
                isMyFriend={true}
                winWidth={winWidth}
              />
            ),
            filteredAndSortedFriends,
          )}
        </UsersPrewiewContainer>
      </Content>
    </Container>
  );
};

Friends.propTypes = proptypes;

const mapStateToProps = state => ({
  friends: getMyFriends(state),
  promos: getPromos(state),
  myLogin: getMyLogin(state),
  winWidth: getWinWidth(state),
});

const actions = { loadPromos, removeFriend };

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
      handleChangeSelectedPromo: () => newPromo => {
        window.scrollTo(0, 0);
        return {
          selectedPromo: newPromo,
        };
      },
      handleChangeFilterBy: () => newFilter => {
        window.scrollTo(0, 0);
        return {
          filterBy: newFilter,
        };
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      window.scrollTo(0, 0);
      this.props.handleChangeSelectedPromo(ALL_PROMO_SELECTED);
      if (isEmpty(this.props.promos)) {
        reqGetPromo()
          .then(res => this.props.loadPromos(res))
          .catch(err => err);
      }
    },
  }),
  onlyUpdateForKeys([
    'friends',
    'promos',
    'selectedPromo',
    'filterBy',
    'winWidth',
  ]),
);
export default enhance(Friends);
