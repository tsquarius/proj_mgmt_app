import React from 'react';

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
    const {collection, boards} = this.props;
    console.log(this.props);

    const boardsList = boards.map(board => 
      <li key={board.id}>
        <h3>{board.title}</h3>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
      )

    return (
      <div className='collection-show'>
        <h2>{collection ? collection.title : ''}</h2>
        <ul className='boards-show'>
          {boardsList}
        </ul>
      </div>
    )
  }
}

export default CollectionShow;