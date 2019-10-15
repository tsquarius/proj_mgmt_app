import styled from 'styled-components';

export const CardName = styled.span`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

export const ToggleCardDetails = styled.div`
  display: ${props => props.active.id === props.cardId ? 'flex' : 'none'}
`;

export const Card = styled.div`
  cursor: pointer;
  background: ${props => props.isDragging ? 'orange' : 'rgba(255,255,255,0.1)'};
  color: ${props => props.isDragging ? 'white' : 'inherit'}
  margin-bottom: 3px;
  padding: 10px;
  :hover {
    background: orange;
    transition: background 0.3s;
  }
  min-height: 40px;
  justify-content: space-between;
  display: flex;
  p {
    :first-of-type {
      font-size: 15px;
      min-width: 40%;
      margin-right: 5px;
    }
    width: 60%;
    font-size: 15px;
  }
`;

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
  width: 220px;
  nav {
    margin-top: 2px;
  }
`;