import styled from "styled-components";
import { keyframes } from "styled-components";

const BarsContainer = styled.div`
  height: 30px;
  width: 40px;
  position: relative;
`;
const sound = keyframes`
  0% {
    opacity: .35;
    background: yellow;
    height: 3px;
  }
  100% {
    opacity: 1;
    background: darken(yellow,20%);
    height: 28px;
  }
`;

const Bar = styled.div`
  background: green;
  bottom: 1px;
  height: 3px;
  position: absolute;
  width: 3px;
  animation: ${sound} 0ms -800ms linear infinite alternate;

  &:nth-child(1) {
    left: 1px;
    animation-duration: 474ms;
  }
  &:nth-child(2) {
    left: 5px;
    animation-duration: 433ms;
  }

  &:nth-child(3) {
    left: 9px;
    animation-duration: 407ms;
  }

  &:nth-child(4) {
    left: 13px;
    animation-duration: 458ms;
  }

  &:nth-child(5) {
    left: 17px;
    animation-duration: 400ms;
  }

  &:nth-child(6) {
    left: 21px;
    animation-duration: 427ms;
  }

  &:nth-child(7) {
    left: 25px;
    animation-duration: 441ms;
  }

  &:nth-child(8) {
    left: 29px;
    animation-duration: 419ms;
  }

  &:nth-child(9) {
    left: 33px;
    animation-duration: 487ms;
  }

  &:nth-child(10) {
    left: 37px;
    animation-duration: 442ms;
  }
`;

export default () => (
  <BarsContainer>
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
  </BarsContainer>
);
