import styled from 'styled-components';

export const ToggleMembers = styled.div`
  display: ${props => props.active ? '' : 'none'}
`;

export const Button = styled.button`
  visibility: visible;
  font-weight: 300;
`;

export const TeamList = styled.li`
  display:flex;
  font-size: 15px;
  justify-content: space-between;
  margin-bottom: 5px;
  span {
    font-size: 20px;
  }
`;

export const ToggleForm = styled.form`
  font-size: 15px;
  width: 250px;
  font-weight: 300;
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  button {
    text-align: left;
    width: 50px;
    :hover {
      text-decoration: none;
      color: black;
      transition: color 0.3s;
    }
  }
  input {
    background: white;
    border-radius: 5px;
    color: black;
  }
  
`;

export const ButtonContainer = styled.nav`
  margin: 10px 0;
  font-size: 15px;
  display: flex;
  padding-top: 10px;
  border-top: 1px dashed white;
  button {
    font-weight: 300;
    :hover {
      text-decoration: none;
      color: black;
      transition: color 0.3s;
    }
  }
`;