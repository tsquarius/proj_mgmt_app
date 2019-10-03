import React from 'react';
import BoardShowContainer from '../boards/board_show_container';

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
      <div className='collection-show'>
        <h2>{collection ? collection.title : ''}</h2>
        <ul className='boards-show'>
          {boardsList}
        </ul>
        <button className='submit' onClick={this.createNewBoard()}>New Board</button>
      </div>
    )
  }
}

export default CollectionShow;