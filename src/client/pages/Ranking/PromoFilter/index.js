import React from 'react';
import { findIndex } from 'ramda';
import { array, string, func } from 'prop-types';

import { Container, Label, SelectedBox, Content } from './styles';
import Separator from '../../../components/Separator';

const propTypes = {
  promos: array,
  selectedPromo: string.isRequired,
  handleChangeSelectedPromo: func.isRequired,
};

const PromoFilter = ({ promos, selectedPromo, handleChangeSelectedPromo }) => (
  <Container>
    <Content>
      {promos.map((promo, id) => (
        <Label
          key={id}
          isSelected={promo === selectedPromo}
          onClick={() => handleChangeSelectedPromo(promo)}
        >
          {promo}
        </Label>
      ))}
      <SelectedBox
        leftPosition={
          findIndex(promo => promo === selectedPromo)(promos) * 80 + 7.5
        }
      />
    </Content>
    <Separator />
  </Container>
);

PromoFilter.propTypes = propTypes;

export default PromoFilter;
