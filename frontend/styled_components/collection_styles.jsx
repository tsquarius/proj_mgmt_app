import styled from 'styled-components';

// side bar
export const ListTitle = styled.li`
  margin: 0 0px 15px 10px;
  font-weight: 700;
  width: 65%;
`;

export const List = styled.li`
  cursor: pointer;
  margin: 0 0px 20px 10px;
  font-weight: 500;
  width: 65%;
  background: ${props =>
    props.active ? 'white' : 'inherit'}
  color: ${props =>
    props.active ? '#6D6F6D' : 'white'}
  a {
    display: block;
    padding: 4px 0px 0px 13px;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  width: 65%;
  display: block;
  padding: 4px 0px 4px 13px;
  text-align: left;
  :hover {
    text-decoration: none;
    background: rgb(233, 132, 0);
  }
`;

// body

export const Title = styled.h2`
  padding: 10px;
  width: 90%
  border-bottom: 2px solid gray; 
  justify-content: space-between;
`;

export const TitleInput = styled.input`
  margin-right: 5px;
  :focus {
    border-radius: 5px;
    background: rgba(255,255,255,0.4);
  }
`;

export const FocusButton = styled.button`
  visibility: ${props => props.focused ? 'visible' : 'hidden'};
  font-size: 15px;
  font-weight: 300;
`;

export const HiddenButton = styled.button`
  visibility: hidden;
  font-size: 15px;
  font-weight: 300;
  opacity: 0;
  ${Title}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`;
export const BoardSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PseudoBoardSection = styled.div`
  display: block
  padding: 10px;
  margin-left: 10px;
`;