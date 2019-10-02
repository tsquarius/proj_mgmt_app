import React from 'react';
import BoardFormContainer from '../boards/board_form_container';
import BoardShowContainer from '../boards/board_show_container';

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

  renderNewForm() {
    return e => {
      e.preventDefault();
      this.props.newForm();
    };
  }

  render() {
    const {collection, boards, collectionId, activeBoardForm} = this.props;

    const boardsList = boards.map(board => 
      <BoardShowContainer key={board.id} board={board} />
      )

    return (
      <div className='collection-show'>
        <h2>{collection ? collection.title : ''}</h2>
        <ul className='boards-show'>
          {boardsList}
        </ul>
        <button className='submit' onClick={this.renderNewForm()}>New Board</button>
        <section className={activeBoardForm === 'new' ? '' : 'hide'}>
          <BoardFormContainer collectionId={collectionId} />
        </section>
      </div>
    )
  }
}

export default CollectionShow;