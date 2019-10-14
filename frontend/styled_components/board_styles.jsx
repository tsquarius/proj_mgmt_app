import styled from 'styled-components';


export const BoardDiv = styled.div`
  display: block
  padding-left: 12px;
  border-bottom: 2px dashed gray;
  width: 90%;
  margin-left: 10px;
`;

export const HeaderSection = styled.header`
  width: 35%;
  margin-left: 10px;
  input {
    padding: 6px 0;
    width: 50%;
    font-size: 20px;
    margin: 5px 5px 0 0;
    :focus {
      border-radius: 5px;
      background: rgba(255,255,255,0.4);
    }
  }
`;

export const ColumnsSection = styled.section`
  min-width: 1100px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const PseudoColumn = styled.div`
  width: 200px;
  margin-right: 10px;
  }
`;

export const ButtonToggle = styled.button`
  visibility: hidden;
  opacity: 0;
  margin-top: 5px;
  font-size: 12px;
  ${HeaderSection}:hover & {
    visibility: visible;
    display: block;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`;


export const FocusButton = styled.button`
  visibility: ${props => props.focused ? 'visible' : 'hidden'};
  margin-top: 5px
  font-size: 12px;
`;