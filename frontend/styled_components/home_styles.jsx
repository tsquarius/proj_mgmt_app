import styled from 'styled-components';

export const Title = styled.h2`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  width: 90%
  border-bottom: 2px solid gray;  
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  width: 70px;
  padding: 4px 0px;
  :hover {
    background: rgb(233, 132, 0);
  }
`;

export const Body = styled.section`
  margin-top: 5px;
  padding: 5px 10px;
  h3{
    font-size: 25px;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 20px
    margin-bottom: 10px;
  }
  button {
    margin: 0 8px;
  }

`;

export const CardDetails = styled.li`
  :first-of-type {
    font-size: 15px;
    min-width: 40 %;
    margin-right: 5px;
  }
  width: 60 %;
`;