import styled from 'styled-components';

//keep
export const Card = styled.li`
  cursor: pointer;
  ${props => props.isDragging ? 'background: orange; color: white' : ''};
`;

//keep
export const CommentIcon = styled.div`
  display: ${props => props.active ? 'flex' : 'none'};
  font-size: 12px;
`;

export const ToggleCardDetails = styled.div`
  display: ${props => props.active.id === props.cardId ? 'flex' : 'none'}
`;
