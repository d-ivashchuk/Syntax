import styled from 'styled-components';

const StyledHeader = styled.header`
  max-width: 1000px;
  margin: 0 auto;

  &--text {
    background: white;
    padding: 2rem;
    font-size: 1.7rem;
  }

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`;

export default StyledHeader;
