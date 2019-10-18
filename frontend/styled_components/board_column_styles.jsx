import styled from 'styled-components';


// keep
export const Column = styled.ul`
`;

export const HeaderSection = styled.header`
background: rgba(255,255,255,0.4);
width: 220px;
min-height: 45px;
margin-left: 10px;
flex-direction: row;
  input, h4 {
    background: none;
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    width: 70%;
    :focus {
      text-decoration: underline;
    }
  }
`;

export const ToggleNav = styled.nav`
  overflow-x: wrap;
  width: 20px;
  font-size: 12px;
`;

export const HiddenButton = styled.button`
  visibility: hidden;
  opacity: 0;
  ${HeaderSection}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s linear;
    padding-top: 7px;
  }
`;

// keep
export const CardsSection = styled.div`
  border: ${props => (props.isDraggingOver ? '1px dashed orange' : 'none')};
`;


export const PseudoCard = styled.div`
  min-height: 30px;
`;

// keep
export const CardButton = styled.button`
  visibility: hidden;
  opacity: 0;
  ${Column}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`;

export const Form = styled.div`
  padding: 10px;
`;
