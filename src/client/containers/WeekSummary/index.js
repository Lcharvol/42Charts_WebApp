import React from 'react';
import { map, isNil } from 'ramda';
import {
  Container,
  Content,
  WeekSummaryElem,
  WeekSummaryLabel,
  WeekSummaryValue,
  Spacer,
} from './styles';
import Box from '../Box';
import { summaryElems } from './constants';
import { MdAttachFile } from 'react-icons/md';

import { store } from '../../index';

const WeekSummary = () => {
  const state = !isNil(store) ? store.getState() : {};
  return (
    <Container>
      <Box
        width={'100%'}
        label={'Week Summary'}
        icon={<MdAttachFile />}
        content={
          <Content>
            {map(
              elem => (
                <WeekSummaryElem key={elem.id}>
                  <WeekSummaryValue>{elem.value(state)}</WeekSummaryValue>
                  <WeekSummaryLabel>{elem.label}</WeekSummaryLabel>
                </WeekSummaryElem>
              ),
              summaryElems,
            )}
            <Spacer />
          </Content>
        }
        minWidth={'0px'}
        margin={'0px'}
      />
    </Container>
  );
};

export default WeekSummary;
