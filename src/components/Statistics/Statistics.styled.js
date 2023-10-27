import styled from 'styled-components';

export const StyledLi = styled.li`
  color: ${props => {
    if (props.$percent >= 75) {
      return 'chartreuse';
    } else if (props.$percent >= 50) {
      return 'gold';
    } else {
      return 'red';
    }
  }};
  font-size: 20px;
  font-weight: 700;
`;

export const StyledList = styled.ul`
  font-size: 16px;
  line-height: 1.5;
`;
