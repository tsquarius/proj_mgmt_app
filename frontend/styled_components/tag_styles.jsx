import styled from 'styled-components';

export const Tag = styled.li`
  background: ${props => props.color}
  color: ${props => props.offSet};
`;

export const CloseTag = styled.button`
  visibility: hidden;
  margin-left: 5px;
  ${props => props.boardView ? '' : `
    ${ Tag }: hover & {
      visibility: visible;
      display: inherit;
      font-weight: bold;
    }`
  }

`;