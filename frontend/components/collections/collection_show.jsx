import React from 'react';
import BoardShowContainer from '../boards/board_show_container';
import styled from 'styled-components';

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
// end

class CollectionShow extends React.Component {

  componentDidMount() {
    const {fetchBoards} = this.props;
    const collectionId = this.props.match.params.collectionId;
    fetchBoards(collectionId);
  }

  // should revisit to make sure it updates whenever we add columns or cards
  componentDidUpdate(prevProps) {
    const collectionId = this.props.match.params.collectionId;
    if (
      (prevProps.match.params.collectionId !== collectionId) ||
      (prevProps.boards.length !== this.props.boards.length)
    ) {
      this.props.fetchBoards(collectionId);
    }
  }

  handleDelete(boardId) {
    return e => {
      e.preventDefault();
      this.props.deleteBoard(boardId);
    }
  }

  createNewBoard() {
    return e => {
      e.preventDefault();
      const {collectionId} = this.props;
      this.props.newBoard(collectionId ,{title: 'New Board'});
    };
  }

  render() {
    const {collection, boards} = this.props;

    const boardsList = boards.map(board => 
      <BoardShowContainer key={board.id} board={board} />
      )

    return (
      <Container>
        <Title>{collection ? collection.title: ''}</Title>
          <Boards>
            {boardsList}
          </Boards>
        <button className='submit' onClick={this.createNewBoard()}>New Board</button>
      </Container>
    )
  }
}

export default CollectionShow;