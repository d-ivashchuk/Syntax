import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import Link from "next/link";
import slug from "speakingurl";
import Router from "next/router";
import Bars from "./bars";
import { FaPlay } from "react-icons/fa";

const StyledShow = styled.div`
  ${props =>
    props.isActive &&
    css`
      border-right-color: #fff;
      background: #fff;
      border-left: 0;
      padding-left: 1rem;
      &:before {
        display: block;
        background: linear-gradient(30deg, #d2ff52 0%, #03fff3 100%);
        width: 10px;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: -10px;
      }
    `};
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  border-left: 10px solid #e4e4e4;
  background: #f9f9f9;
  position: relative;
  display: flex;
  cursor: pointer;
  p {
    text-transform: uppercase;
    margin: 0;
    color: #666;
    font-size: 11px;
  }
  h3 {
    color: #1d1d1d;
    font-size: 1.5rem;
    margin: 0;
  }
  a {
    flex: 1 1 auto;
    padding: 10px;
  }
`;
const PlayControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  flex-shrink: 0;
  padding: 1rem;
  button {
    background: none;
    border: 0;
    outline-color: #ff0;
    &:hover {
      color: #f1c15d;
    }
  }
`;
export default class Show extends React.Component {
  changeURL = (e, show) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    Router.push(`/?number=${show.displayNumber}`, href, { shallow: true });
  };

  render() {
    const { show, currentPlaying, currentShow, setCurrentPlaying } = this.props;
    return (
      <StyledShow isActive={currentShow === show.displayNumber}>
        <a
          href={`/show/${show.displayNumber}/${slug(show.title)}`}
          onClick={e => this.changeURL(e, show)}
        >
          <p>Episode {show.displayNumber}</p>
          <h3>{show.title}</h3>
        </a>

        <PlayControls>
          {currentPlaying === show.displayNumber ? (
            <Bars />
          ) : (
            <button
              onClick={() => setCurrentPlaying(show.displayNumber)}
              title="play button"
            >
              <FaPlay />
            </button>
          )}
        </PlayControls>
      </StyledShow>
    );
  }
}
