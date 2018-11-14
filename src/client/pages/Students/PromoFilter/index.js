import React from 'react';
import { isEmpty, findIndex } from 'ramda';
import { array, string, func } from 'prop-types';

import { Container, Label, SelectedBox, Content } from './styles';
import Separator from '../../../components/Separator';
import { MAIN_COLOR } from '../../../constants/colors';

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
      {!isEmpty(promos) && (
        <SelectedBox
          leftPosition={
            findIndex(promo => promo === selectedPromo)(promos) * 80 + 7.5
          }
        />
      )}
    </Content>
  </Container>
);

PromoFilter.propTypes = propTypes;

export default PromoFilter;
