import styled from 'styled-components';
import theme from './theme';

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.75rem;
  border: 0;
  background: ${theme.colors.lightgrey};
  color: black;
  font-size: 0.9rem;
  line-height: 1;
  transition: all 0.2s;
  &:hover {
    background: #f2f2f2;
  }
  .icon {
    border-right: 1px solid ${theme.colors.grey};
    padding-right: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export default StyledButton;
