import styled from 'styled-components';
import { StyledFooter } from '../styles';

const FooterContainer = styled(StyledFooter)`
  text-align: center;
  color: white;
  max-width: 1000px;
  padding-top: 1rem;
`;

const Footer = () => (
  <FooterContainer>
    <p>
      Want to <a href="/sponsor">Sponsor the Podcast?</a>
    </p>
    <p>&copy; Wes Bos && Scott Tolinski {new Date().getFullYear()}</p>
    <p>
      Website made with React, Next.js and Styled Components. Hosted on Now. The
      source is on{' '}
      <a
        href="https://github.com/wesbos/syntax"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </FooterContainer>
);

export default Footer;
