import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import slug from 'speakingurl';
import Router from 'next/router';
import { FaPlay } from 'react-icons/fa';
import Bars from './bars';

import { theme, mixins } from '../styles';

const ShowContainer = styled.div`
  display: flex;
  position: relative;
  background: ${props =>
    props.active ? theme.colors.lightgrey : theme.colors.white};
  border: 1px solid ${theme.colors.grey};
  border-left: ${props =>
    props.active ? 0 : `10px solid ${theme.colors.grey}`};
  border-right-color: ${props =>
    props.active ? theme.colors.white : theme.colors.grey};
  padding-left: ${props => (props.active ? `1rem` : ``)};

  &:before {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    background: ${theme.colors.grad};
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
  }
`;
const ShowLink = styled.a`
  flex: 1 1 auto;
  padding: 10px;
`;
const ShowNumber = styled.p`
  text-transform: uppercase;
  margin: 0;
  color: ${theme.colors.grey3};
  font-size: 11px;
`;
const ShowTitle = styled.h3`
  color: ${theme.colors.black};
  font-size: 1rem;
  margin: 0;
`;
const ShowPlayControls = styled.div`
  ${mixins.flexCenter};
  width: 5rem;
  flex-shrink: 0;
  padding: 1rem;

  button {
    background: none;
    border: 0;
    outline-color: ${theme.colors.yellow};
    &:hover {
      color: ${theme.colors.yellow};
    }
  }
`;

class Show extends React.Component {
  changeURL = (e, show) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    Router.push(`/?number=${show.displayNumber}`, href, { shallow: true });
  };

  render() {
    const { show, currentPlaying, currentShow, setCurrentPlaying } = this.props;

    return (
      <ShowContainer active={currentShow === show.displayNumber}>
        <ShowLink
          href={`/show/${show.displayNumber}/${slug(show.title)}`}
          onClick={e => this.changeURL(e, show)}
        >
          <ShowNumber>Episode {show.displayNumber}</ShowNumber>
          <ShowTitle>{show.title}</ShowTitle>
        </ShowLink>

        <ShowPlayControls>
          {currentPlaying === show.displayNumber ? (
            <Bars />
          ) : (
            <button
              onClick={() => setCurrentPlaying(show.displayNumber)}
              title="play button"
              type="button"
            >
              <FaPlay />
            </button>
          )}
        </ShowPlayControls>
      </ShowContainer>
    );
  }
}

export default Show;
