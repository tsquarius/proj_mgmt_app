import styled from 'styled-components';

export const Comment = styled.li`
  background: ${props => props.index % 2 === 0 ? 'white' : 'rgb(226, 226, 226)'};
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