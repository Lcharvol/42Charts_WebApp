import React from 'react';
import { map, isNil } from 'ramda';
import { withStateHandlers } from 'recompose';

import {
  Container,
  Content,
  WeekSummaryElem,
  WeekSummaryLabel,
  WeekSummaryValue,
  Spacer,
  ExpandButton,
  MoreIcon,
  LessIcon,
} from './styles';
import Box from '../Box';
import {
  summaryElems,
  moreSummaryElems,
  wrappedHeight,
  unwrappedHeight,
} from './constants';
import { MdAttachFile } from 'react-icons/md';

import { store } from '../../index';

const WeekSummary = ({ wrapped, handleChangeWrapped }) => {
  const state = !isNil(store) ? store.getState() : {};
  return (
    <Container>
      <Box
        width={'100%'}
        height={wrapped ? wrappedHeight : unwrappedHeight}
        label={'Week Summary'}
        icon={<MdAttachFile />}
        content={
          <Content>
            {map(
              elem => (
                <WeekSummaryElem key={elem.id}>
                  <WeekSummaryValue>{elem.value(state)}</WeekSummaryValue>
                  <WeekSummaryLabel>{elem.label(state)}</WeekSummaryLabel>
                </WeekSummaryElem>
              ),
              summaryElems,
            )}
            {!wrapped &&
              map(
                elem => (
                  <WeekSummaryElem key={elem.id}>
                    <WeekSummaryValue>{elem.value(state)}</WeekSummaryValue>
                    <WeekSummaryLabel>{elem.label(state)}</WeekSummaryLabel>
                  </WeekSummaryElem>
                ),
                moreSummaryElems,
              )}
            <ExpandButton onClick={() => handleChangeWrapped(!wrapped)}>
              {wrapped ? <MoreIcon /> : <LessIcon />}
            </ExpandButton>
            <Spacer />
          </Content>
        }
        minWidth={'0px'}
        margin={'0px'}
      />
    </Container>
  );
};

export default withStateHandlers(
  ({ initialWrapped = true }) => ({
    wrapped: initialWrapped,
  }),
  {
    handleChangeWrapped: () => newValue => ({
      wrapped: newValue,
    }),
  },
)(WeekSummary);
