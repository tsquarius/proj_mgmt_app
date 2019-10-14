import styled from 'styled-components';

//card section
export const Title = styled.h3`
  input {
    width: 70%;
  }
  padding-bottom: 5px;
  border-bottom: 2px solid white;
  margin-bottom: 20px;
  font-weight: 300;
`;

export const CardFormItems = styled.li`
  font-size: 15px;
  color: black;
  background: white;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  span {
    font-weight: 700;
  }
  input {
    margin-left: 5px;
  }
  textarea {
    font-size: 13px;
    padding: 5px 0 ;
    margin-bottom: 5px;
    width: 90%;
  }
`;

export const ButtonContainer = styled.nav`
  margin: 10px 0;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px dashed white;
  }
`;

//Tags
export const TagsList = styled.ul`
  display: flex;
  max-height: 60px
  flex-wrap: wrap;
`;

export const AddTag = styled.div`
  display: ${props => props.active ? 'flex' : 'none'}
  font-size: 12px;
  flex-direction: row;
  margin-top: 10px;
`;

export const TagFormItems = styled.li`
  display: flex;
  flex-direction: row;
  width: 105px;
  margin: 0 5px 10px 0;
  color: black;
  background: white;
  border-radius: 5px;
  span {
    font-weight: 700;
    padding: 2px 0 0 2px;
  }
  input {
    margin-left: 5px;
  }
`;

export const TagSelector = styled.select`
  margin-left: 2px;
`;

export const TagNav= styled.nav`
  margin-left: 2px;
  padding-bottom: 10px;
  justify-content: space-between;
  display: flex;
  button {
    font-size: 12px;
    margin-left: 10px;
  }
`;

export const TagButtonContainer = styled.nav`
  margin-left: 2px;
  padding-bottom: ${props => props.active ? '0px' : '10px'};
  border-bottom: 1px dashed white;
  justify-content: space-between;
  display: flex;
  button {
    display: ${props => props.active ? 'none': 'inherit'};
    text-align: left;
    font-size: 12px;
  }
  margin-top: ${props => props.active ? '0px' : '10px'};
`;


///