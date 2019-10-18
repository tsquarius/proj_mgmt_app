import styled from 'styled-components';

export const CardName = styled.span`
  display: flex;
  flex-direction: column;
  width: 85%;
`;


export const ToggleCardDetails = styled.div`
  display: ${props => props.active.id === props.cardId ? 'flex' : 'none'}
`;


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

export const TextBox = styled.textarea`
  border-radius: 5px;
  padding: 5px;
  background: rgba(255, 255, 255, .6);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 210px;
  nav {
    margin-top: 2px;
  }
`;