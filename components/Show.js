import React from 'react';
import Router from 'next/router';
import { FaPlay } from 'react-icons/fa';
import slug from 'speakingurl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Bars from './bars';
import { theme, mixins } from '../styles';

const ShowContainer = styled.div`
  display: flex;
  position: relative;
  background-color: ${props =>
    props.active ? theme.colors.white : theme.colors.lightgrey};
  border-bottom: 1px solid ${theme.colors.grey};
  border-right: 1px solid ${theme.colors.grey};
  border-left: ${props =>
    props.active ? 0 : `10px solid ${theme.colors.grey}`};
  border-right-color: ${props =>
    props.active ? theme.colors.white : theme.colors.grey};
  padding-left: ${props => (props.active ? `10px` : ``)};

  &:before {
    content: '';
    display: ${props => (props.active ? `block` : `none`)};
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
  padding: 0.75rem;
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
  line-height: 1.3;
  margin: 0;
`;
const ShowPlayControls = styled.div`
  ${mixins.flexCenter};
  width: 3rem;
  flex-shrink: 0;
  padding: 0.5rem;
`;
const PlayButton = styled.button`
  background: none;
  border: 0;
  outline-color: ${theme.colors.yellow};
  padding: 0.5rem;
  &:hover {
    color: ${theme.colors.yellow};
  }
`;

class Show extends React.Component {
  changeURL = (e, show) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    Router.push(`/?number=${show.displayNumber}`, href, { shallow: true });
  };

  render() {
    const {
      show,
      currentPlaying,
      currentShow,
      setCurrentPlaying,
      isPlaying,
    } = this.props;

    return (
      <ShowContainer
        active={currentShow === show.displayNumber}
        playing={currentPlaying === show.displayNumber}
      >
        <ShowLink
          href={`/show/${show.displayNumber}/${slug(show.title)}`}
          onClick={e => this.changeURL(e, show)}
        >
          <ShowNumber>Episode {show.displayNumber}</ShowNumber>
          <ShowTitle>{show.title}</ShowTitle>
        </ShowLink>

        <ShowPlayControls>
          {currentPlaying === show.displayNumber ? (
            <Bars isPlaying={isPlaying} />
          ) : (
            <PlayButton
              onClick={() => setCurrentPlaying(show.displayNumber)}
              title="play button"
              type="button"
            >
              <FaPlay />
            </PlayButton>
          )}
        </ShowPlayControls>
      </ShowContainer>
    );
  }
}

Show.propTypes = {
  show: PropTypes.object.isRequired,
  currentPlaying: PropTypes.string.isRequired,
  currentShow: PropTypes.string.isRequired,
  setCurrentPlaying: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default Show;
