import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Loading from '../loading';

import CardsIndexContainer from '../cards/cards_index_container';
import NewCardsFormContainer from '../cards/new_cards_form_container';

const Column = styled.div`
  width: 200px;
  margin-right: 10px;
  background: inherit;
  }
`;

const HeaderSection = styled.header`
padding: 0px;
background: rgba(255,255,255,0.4);
display: flex;
width: 180px;
min-height: 45px;
margin-left: 10px;
flex-direction: row;
  input {
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

const ToggleNav = styled.nav`
  overflow-x: wrap;
  width: 20px;
  font-size: 12px;
  display: none;
  ${HeaderSection}:hover & {
    display: flex;
    flex-direction: column;
    padding-top: 7px;
  }
`;

const CardsSection = styled.article`
  width: 180px;
  margin: 10px 0 0 10px;
  border: ${props => (props.isDraggingOver ? '1px dashed white' : 'none')};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const PseudoCard = styled.div`
  min-height: 20px;
`;

const CardButton = styled.button`
  padding-left: 12px;
  visibility: hidden;
  opacity: 0;
  ${Column}:hover & {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
`;

const Form = styled.div`
  padding: 10px;
`;

const BoardColumnsShow = props => {

  const { fetchBoardColumn, destroyBoardColumn, boardColumn, 
    updateBoardColumn, activeForm, newCard, bcId, index } = props;

  const [title, setTitle] = useState('');


  useEffect(() => {
    if (boardColumn) {
      setTitle(boardColumn.title);
    }
  }, [boardColumn ? boardColumn.title : ''] );

  const handleTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleSubmitTitle = e => {
    e.preventDefault();
    updateBoardColumn(boardColumn.id, {title: title});
  };

  const removeColumn = e => {
    e.preventDefault();
    destroyBoardColumn(boardColumn.id);
  };

  const renderCards = () => {
    return (
      <Droppable droppableId={bcId} type='card'>
        {(provided, snapshot) => (
          <CardsSection 
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {boardColumn.cards.map((cardId,index) => 
              <CardsIndexContainer cardId={cardId} key={cardId} index={index} />)}
            
            <PseudoCard>
              {provided.placeholder}
            </PseudoCard>
            
          </CardsSection>      
        )}
      </Droppable>
    )
  };

  const renderNewCardForm = e => {
    e.preventDefault();
    newCard(boardColumn.id);
  };

  if (!boardColumn) {
    return (
      <Loading />
    )
  } else {

    return(
      <Column>
        <HeaderSection >
          <input type='text' value={title} onChange={handleTitleChange} />
          <ToggleNav>
            <button onClick={handleSubmitTitle} className='submit'>Save</button>
            <button onClick={removeColumn} className='submit'>Del</button>
          </ToggleNav>
        </HeaderSection>


          {renderCards()}

          <Form>
            <div className={activeForm.bcId === boardColumn.id ? '' : 'hide'}>
              <NewCardsFormContainer bcId={boardColumn.id} />
            </div>
          </Form>

          <CardButton
            className='submit'
            onClick={renderNewCardForm}>
            Add card...
          </CardButton>
      </Column>
    )
  }
}

export default BoardColumnsShow;