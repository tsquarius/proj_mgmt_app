import styled from 'styled-components';

// keep
export const Column = styled.ul`
`;

// keep
export const CardsSection = styled.div`
  border: ${props => (props.isDraggingOver ? '1px dashed orange' : 'none')};
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
