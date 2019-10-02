import React from 'react';
import BoardFormContainer from '../boards/board_form_container';
import BoardShow from '../boards/board_show';

class CollectionShow extends React.Component {

  componentDidMount() {
    const {fetchBoards} = this.props;
    const collectionId = this.props.match.params.collectionId;
    fetchBoards(collectionId);
  }

  componentDidUpdate(prevProps) {
    const collectionId = this.props.match.params.collectionId;
    if ((prevProps.match.params.collectionId !== collectionId) ||
      prevProps.boards.length !== this.props.boards.length
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

  render() {
    const {collection, boards, collectionId} = this.props;

    const boardsList = boards.map(board => 
      <BoardShow key={board.id} board={board} deleteBoard={this.props.deleteBoard} />
      )

    return (
      <div className='collection-show'>
        <h2>{collection ? collection.title : ''}</h2>
        <ul className='boards-show'>
          {boardsList}
        </ul>
        <BoardFormContainer collectionId={collectionId} />
      </div>
    )
  }
}

export default CollectionShow;