import Subscribe from "./Subscribe";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  color: white;
  flex-wrap: wrap;
  margin: 2rem auto;
  max-width: 1000px;
`;

const LeftHeaderSection = styled.div`
  width: 30%;
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const RightHeaderSection = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Logo = styled.img`
  margin-left: -3rem;
  max-width: 300px;
  text-align: center;
  @media (max-width: 800px) {
    margin-left: -2rem;
  }
`;

const Title = styled.div`
  position: relative;
  h2 {
    font-size: 2.5rem;
    margin: 0;
  }
  a {
    border: 1px solid yellow;
    border-radius: 3px;
    padding: 5px 10px;
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 12px;
    &:hover {
      border: 1px dotted;
    }
    @media (max-width: 1000px) {
      position: relative;
      margin: 10px 0;
      text-align: center;
      display: block;
      top: 0;
    }
  }
`;

const People = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  div {
    background: rgba(255, 255, 255, 0.07);
    padding: 1rem;
    width: 48%;
    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 0;
    }
    h3 {
      margin: 0;
      font-size: 2rem;
    }
    em {
      font-size: 1rem;
    }
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  float: left;
  margin-right: 20px;
  border: 3px solid white;
  box-shadow: inset 0 0 10px red;
  @media (max-width: 800px) {
    width: 50px;
    border-width: 1px;
  }
`;
const Header = () => (
  <StyledHeader>
    <LeftHeaderSection>
      <h1 aria-label="Syntax.FM">
        <Logo src="/static/logo.png" alt="Syntax" />
      </h1>
    </LeftHeaderSection>
    <RightHeaderSection>
      <Title>
        <h2>A Tasty Treats Podcast for Web Developers.</h2>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQlAo1wXHiJMySdU-h8QMtfoz92aMS9eycEHXB6eRCLh8KHA/viewform"
        >
          Ask a Potluck Question →
        </a>
      </Title>
      <People>
        <div>
          <Avatar src="/static/wes400x400.jpg" alt="" />
          <h3>Wes Bos</h3>
          <a target="_blank" href="https://twitter.com/wesbos">
            @wesbos
          </a>
          <p>
            Full Stack JavaScript Developer. Creator of really good{" "}
            <a target="_blank" href="https://wesbos.com/courses">
              web development courses
            </a>
            . BBQ enthusiast.
          </p>
        </div>

        <div>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/669383?s=460&v=4"
            alt=""
          />
          <h3>Scott Tolinski</h3>
          <a target="_blank" href="https://twitter.com/stolinski">
            @stolinski
          </a>
          <p>
            Web Developer, Creator of{" "}
            <a href="https://leveluptutorials.com/">Level Up Tuts</a>, Bboy,
            Robotops Crew and{" "}
            <a target="_blank" href="https://www.youtube.com/c/leveluptuts">
              Youtuber
            </a>
          </p>
        </div>
      </People>
    </RightHeaderSection>
    <Subscribe />
  </StyledHeader>
);

export default Header;
