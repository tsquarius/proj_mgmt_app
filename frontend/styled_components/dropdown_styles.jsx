import styled from 'styled-components';

export const DropButton = styled.button`
  width: 100px;
  :hover {
    text-decoration: none;
    color: orange;
    transition: color 0.3s;
  }
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
`; 

export const DropDownContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  position: absolute;
  background: rgba(255,255,255,0.7);
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  z-index: 1;
  right: 0;

  ${DropDown}:hover & {
    display: block;
  }

  button {
    text-align: left;
    font-size: 15px;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    width: 100%;
    :hover {
      background: rgba(255,255,255,0.6);
    }

  }

`;

