import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Loading from '../loading';

import CardsIndexContainer from '../cards/cards_index_container';
import NewCardsFormContainer from '../cards/new_cards_form_container';

const Column = styled.div`
  width: 200px;
  border: 1px solid green;
  margin-right: 10px;
  background: lightgray;
  }
`;

const HeaderSection = styled.header`
  display: flex;
  input {
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    border: none;
    background: inherit;
    width: 90%;
    float: left;
    :focus {
      border: 1px solid black;
    }
  }
`;

const ToggleNav = styled.nav`
  float: right;
  display: none;
  ${HeaderSection}:hover & {
    display: flex;
  }
`;

const CardsSection = styled.article`
  padding: 10px;
  background: ${props => (props.isDraggingOver ? 'gray' : 'inherit')};
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const PseudoCard = styled.div`
  min-height: 20px;
`;

const Form = styled.div`
  padding: 10px;
`;

const DragBar = styled.div`
  background: green;
  height: 10px;
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

          <button
            className='submit'
            onClick={renderNewCardForm}>
            Add card...
          </button>
      </Column>
    )
  }
}

export default BoardColumnsShow;