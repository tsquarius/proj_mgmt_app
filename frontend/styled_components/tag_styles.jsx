import styled from 'styled-components';

export const Tag = styled.li`
  border-radius: 5px;
  font-size: 12px;
  background: ${props => props.color}
  min-width: 30px;
  height: 13px;
  padding: 3px 5px;
  display: flex;
  margin-right: 1px;
  justify-content: space-between;
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