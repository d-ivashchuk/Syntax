import React from 'react';
import styled from 'styled-components';
import { theme, mixins, media, StyledButton } from '../styles';

const ShowNotesContainer = styled.div`
  padding: 1rem;
  width: 62%;
  font-size: 0.9rem;
  ${media.phablet`
    width: 100%;
  `};
  pre {
    background: ${theme.colors.lightgrey};
    padding: 1rem;
  }
  ul {
    padding-left: 1rem;
    list-style-type: circle;
  }
  li {
    margin: 10px 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'courier';
    font-weight: 100;
    border-bottom: 1px solid ${theme.colors.grey};
    padding-bottom: 1rem;
    &:before {
      padding-right: 1rem;
    }
  }
  a {
    color: ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.yellow};
    text-decoration: none;
  }
`;
const ShowDate = styled.p`
  margin-top: 0;
  text-align: right;
  color: ${theme.colors.grey3};
  font-size: 0.75rem;
`;
const ShowTitle = styled.h2`
  font-family: 'courier';
  font-weight: 100;
  font-size: 1.5rem;
  border-bottom: 1px solid ${theme.colors.grey};
  padding-bottom: 1rem;
  &:before {
    padding-right: 1rem;
  }
`;
const ButtonIcon = styled.span`
  border-right: 1px solid ${theme.colors.grey};
  padding-right: 0.5rem;
  margin-right: 0.5rem;
`;
const PlayButton = styled(StyledButton)`
  margin-right: 0.75rem;
`;
const DownloadButton = styled.a`
  ${mixins.button};
  margin-right: 0.75rem;
  border: 0 !important;
`;
const EditButton = styled.a`
  ${mixins.button};
  border: 0 !important;
`;

const ShowNotes = ({ show, setCurrentPlaying }) => (
  <ShowNotesContainer>
    <ShowDate>{show.displayDate}</ShowDate>
    <ShowTitle>{show.title}</ShowTitle>
    <PlayButton
      onClick={() => setCurrentPlaying(show.displayNumber)}
      type="button"
    >
      <ButtonIcon>🎵</ButtonIcon> Play Episode {show.displayNumber}
    </PlayButton>
    <DownloadButton download href={show.url}>
      <ButtonIcon>👇</ButtonIcon> Download Show
    </DownloadButton>
    <EditButton
      href={`https://github.com/wesbos/Syntax/edit/master/${show.notesFile}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonIcon>✏️</ButtonIcon> Edit Show Notes
    </EditButton>
    <div dangerouslySetInnerHTML={{ __html: show.html }} />
  </ShowNotesContainer>
);

export default ShowNotes;
