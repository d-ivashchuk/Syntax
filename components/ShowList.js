import React from "react";
import styled from "styled-components";
import Show from "./Show";

const StyledShowList = styled.div`
  width: 38%;
  display: flex;
  flex-direction: column;
`;
export default ({ shows, currentPlaying, currentShow, setCurrentPlaying }) => (
  <StyledShowList>
    {shows.map(show => (
      <Show
        setCurrentPlaying={setCurrentPlaying}
        currentPlaying={currentPlaying}
        currentShow={currentShow}
        key={show.number}
        show={show}
      />
    ))}
    <div className="show show--dummy" />
  </StyledShowList>
);
