import React from 'react';
import styled from 'styled-components';
import Show from './Show';

import { theme, media } from '../styles';

const ShowListContainer = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
  ${media.phablet`
    width: 100%;
  `};
`;
const DummyShow = styled.div`
  display: flex;
  flex: 10 auto;
  border: 1px solid ${theme.colors.grey};
  border-left: 10px solid ${theme.colors.grey};
  background: ${theme.colors.lightgrey};
  position: relative;
`;

const ShowList = ({
  shows,
  currentPlaying,
  currentShow,
  setCurrentPlaying,
  isPlaying,
}) => (
  <ShowListContainer>
    {shows.map(show => (
      <Show
        setCurrentPlaying={setCurrentPlaying}
        currentPlaying={currentPlaying}
        currentShow={currentShow}
        key={show.number}
        show={show}
        isPlaying={isPlaying}
      />
    ))}
    <DummyShow />
  </ShowListContainer>
);

export default ShowList;
