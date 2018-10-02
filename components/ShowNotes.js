import React from "react";
import styled from "styled-components";
import Show from "./Show";

const StyledShowNotes = styled.div`
  padding: 2rem;
  width: 62%;
  font-size: 1.5rem;
  button,
  a {
    border-bottom: 0 !important;
    border: 0;
    background: #f2f2f2;
    color: #000;
    padding: 0;
    line-height: 1;
    font-size: 1.5rem;
    padding: 1rem;
    display: inline-block;
    transition: all 0.2s;
    margin-left: 1rem;

    span {
      border-right: 1px solid #808080;
      padding-right: 0.5rem;
      margin-right: 0.5rem;
    }
    &:hover {
      background: #cdcdcd;
    }
  }
  ul {
    padding-left: 2rem;
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
    font-family: "courier";
    font-weight: 100;
    border-bottom: 1px solid #808080;
    padding-bottom: 1rem;
  }
  h1:before,
  h2:before,
  h3:before,
  h4:before,
  h5:before,
  h6:before {
    padding-right: 1rem;
  }

  pre {
    background: #d3d3d3;
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 2.5rem;
  }

  a {
    color: #333;
    border-bottom: 1px solid #ff0;
    text-decoration: none;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;
const ShowDate = styled.p`
  margin-top: 0;
  text-align: right;
  color: gray3;
  font-size: 1.2rem;
`;

export default ({ show, setCurrentPlaying }) => (
  <StyledShowNotes>
    <ShowDate>{show.displayDate}</ShowDate>
    <h2>{show.title}</h2>
    <button onClick={() => setCurrentPlaying(show.displayNumber)}>
      <span className="icon">🎵</span> Play Episode {show.displayNumber}
    </button>
    <a download href={show.url}>
      <span className="icon">👇</span> Download Show
    </a>
    <a
      href={`https://github.com/wesbos/Syntax/edit/master/${show.notesFile}`}
      target="_blank"
    >
      <span>✏️</span> Edit Show Notes
    </a>
    <div dangerouslySetInnerHTML={{ __html: show.html }} />
  </StyledShowNotes>
);
