import React from 'react';
import { map } from 'ramda';
import { compose, withStateHandlers } from 'recompose';
import { number, func } from 'prop-types';

import { Container, Label, SelectedBox, Content } from './styles';
import Separator from '../../../components/Separator';

const propTypes = {
  selectedPromo: number.isRequired,
  handleChangeSelectedPromo: func.isRequired,
};

const promos = [
  {
    id: 0,
    label: 2013,
  },
  {
    id: 1,
    label: 2014,
  },
  {
    id: 2,
    label: 2015,
  },
  {
    id: 3,
    label: 2016,
  },
  {
    id: 4,
    label: 2017,
  },
  {
    id: 5,
    label: 2018,
  },
];

const PromoFilter = ({ selectedPromo, handleChangeSelectedPromo }) => (
  <Container>
    <Content>
      {map(
        promo => (
          <Label
            key={promo.id}
            isSelected={promo.id === selectedPromo}
            onClick={() => handleChangeSelectedPromo(promo.id)}
          >
            {promo.label}
          </Label>
        ),
        promos,
      )}
      <SelectedBox leftPosition={selectedPromo * 80 + 7.5} />
    </Content>
    <Separator />
  </Container>
);

PromoFilter.propTypes = propTypes;

const enhance = compose(
  withStateHandlers(
    ({ initialSelectedPromo = 0 }) => ({
      selectedPromo: initialSelectedPromo,
    }),
    {
      handleChangeSelectedPromo: () => promoId => ({
        selectedPromo: promoId,
      }),
    },
  ),
);
export default enhance(PromoFilter);
