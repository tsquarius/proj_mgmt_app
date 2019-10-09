import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';
//Styles
const Container = styled.div``;
const Title = styled.h2`
  padding: 10px;
  font-size: 30px;
  font-style: italic;
`;
const Boards = styled.section`
  display: flex;
  flex-direction: column;
`;

const PseudoBoard = styled.div`
  display: block
  padding: 10px;
  button {
    font-size: 20px;
  }
`;

// end

class CollectionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.boardColumns);
  }

  componentDidMount() {
    const { fetchBoards } = this.props;
    const collectionId = this.props.match.params.collectionId;
    fetchBoards(collectionId);
  }

  // should revisit to make sure it updates whenever we add columns or cards
  componentDidUpdate(prevProps) {
    const collectionId = this.props.match.params.collectionId;
    const {collection} = this.props;

    if (
      !prevProps.collection ||
      (prevProps.match.params.collectionId !== collectionId) ||
      (prevProps.collection.boards.length !== collection.boards.length)
    ) {
      this.props.fetchBoards(collectionId);
    }
  }

  handleDelete(boardId) {
    return e => {
      e.preventDefault();
      this.props.deleteBoard(boardId);
    };
  }

  createNewBoard() {
    return e => {
      e.preventDefault();
      const {collectionId} = this.props;
      this.props.newBoard(collectionId ,{title: 'New Board'});
    };
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;
    console.log(result);
    // const { boardColumns, patchCard } = this.props;

    if (!destination) { return; }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) { return; }

    const sourceColumn = boardColumns[source.droppableId];
    const destColumn = boardColumns[destination.droppableId];

    const sourceCardIds = Array.from(sourceColumn.cards);
    const destCardIds = Array.from(destColumn.cards);

    // remove card from its starting point
    sourceCardIds.splice(source.index, 1);

    // drop card into new destination 
    if (destination.droppableId !== source.droppableId) {
      //if card moved to a new column:
      destCardIds.splice(destination.index, 0, draggableId);
      destCardIds.forEach((cardId, index) => {
        patchCard(cardId, {
          order: index,
          board_column_id: destColumn.id
        });
      });
      // destColumn.ordered_cards = destCardIds;
      // handleUpdateBcArray(destColumn);
    } else {
      //if card moved within same column:
      sourceCardIds.splice(destination.index, 0, draggableId);
    }

    // update order in original column
    sourceCardIds.forEach((cardId, index) => {
      patchCard(cardId, {
        order: index,
        board_column_id: sourceColumn.id
      });
    });

    // sourceColumn.ordered_cards = sourceCardIds;
    // handleUpdateBcArray(sourceColumn);
  }

  render() {
    const {collection, loading } = this.props;

    if (loading || !collection) {
      return (
        <Container>
          <Loading />
        </Container>
      )
    } 

    const boardsList = collection.boards.map(id => 
        <BoardShowContainer key={id} boardId={id} />
      );

    return (
      <Container>
        <Title>{collection ? collection.title: ''}</Title>
          <Boards>
            <DragDropContext onDragEnd={this.onDragEnd}>
              {boardsList}
            </DragDropContext>
          </Boards>
          <PseudoBoard>
            <button className='submit' onClick={this.createNewBoard()}>Add Board...</button>
          </PseudoBoard>
      </Container>
    )
  }
}

export default CollectionShow;