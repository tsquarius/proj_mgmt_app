import styled from 'styled-components';

export const Comment = styled.li`
  font-size: 15px;
  margin-bottom: 5px;
  color: black;
  background: ${props => props.index % 2 === 0 ? 'white' : 'rgb(226, 226, 226)'};
  border-radius: 5px;
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 5px;
`;

export const Author = styled.span`
  font-size: 10px
`;

export const DateTag = styled.span`
  font-size: 10px;
`;

export const AddComment = styled.div`
  display: ${props => props.active ? 'flex' : 'none'}
  font-size: 15px;
  flex-direction: column;
`;

export const TextBox = styled.textarea`
  border-radius: 5px;
  padding: 5px;
`;

export const Button = styled.button`
  font-size: 15px;
  text-align: left;
  :hover {
    color: black;
    transition: color 0.3s;
    text-decoration: none;
  }
`;