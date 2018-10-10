import styled from 'styled-components';
import { theme, StyledHeader } from '../styles';

import Subscribe from './Subscribe';

const HeaderContainer = styled(StyledHeader)`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  color: ${theme.colors.white};
`;
const HeaderLeft = styled.div`
  width: 30%;
  text-align: center;
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
const HeaderRight = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Title = styled.div`
  position: relative;
`;
const Tagline = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
const PotluckButton = styled.a`
  position: absolute;
  top: 5px;
  right: 0;
  padding: 5px 10px;
  border: 1px solid ${theme.colors.yellow};
  border-radius: 3px;
  font-size: 12px;
  text-decoration: none;
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
`;
const People = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 0;
`;
const Person = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.07);
  padding: 0.5rem;
  width: 48%;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 3px solid ${theme.colors.white};
  box-shadow: inset 0 0 10px red;
  @media (max-width: 800px) {
    width: 50px;
    border-width: 1px;
  }
`;
const PersonDetails = styled.div``;
const Name = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  em {
    font-size: 1rem;
  }
`;
const About = styled.p`
  margin-bottom: 0;
`;
const Header = () => (
  <HeaderContainer>
    <HeaderLeft>
      <h1 aria-label="Syntax.FM" hidden>
        Syntax.FM
      </h1>
      <Logo src="/static/logo.png" alt="Syntax Logo" />
    </HeaderLeft>
    <HeaderRight>
      <Title>
        <Tagline>A Tasty Treats Podcast for Web Developers.</Tagline>
        <PotluckButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfQlAo1wXHiJMySdU-h8QMtfoz92aMS9eycEHXB6eRCLh8KHA/viewform"
        >
          Ask a Potluck Question →
        </PotluckButton>
      </Title>
      <People>
        <Person>
          <Avatar src="/static/wes400x400.jpg" alt="" />
          <PersonDetails>
            <Name>Wes Bos</Name>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/wesbos"
            >
              @wesbos
            </a>
            <About>
              Full Stack JavaScript Developer. Creator of really good{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wesbos.com/courses"
              >
                web development courses
              </a>
              . BBQ enthusiast.
            </About>
          </PersonDetails>
        </Person>

        <Person>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/669383?s=460&v=4"
            alt=""
          />
          <PersonDetails>
            <Name>Scott Tolinski</Name>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/stolinski"
            >
              @stolinski
            </a>
            <About>
              Web Developer, Creator of{' '}
              <a href="https://leveluptutorials.com/">Level Up Tuts</a>, Bboy,
              Robotops Crew and{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/c/leveluptuts"
              >
                Youtuber
              </a>
            </About>
          </PersonDetails>
        </Person>
      </People>
    </HeaderRight>
    <Subscribe />
  </HeaderContainer>
);

export default Header;
