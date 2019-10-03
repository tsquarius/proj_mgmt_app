import React from 'react';
import CardsIndexContainer from '../cards/cards_index_container';

class BoardColumnsShow extends React.Component {

  constructor(props) {
    super(props);
    this.addColumn = this.addColumn.bind(this);
  }


  addColumn(e) {
    e.preventDefault();
    const {boardId, createColumn} = this.props;
    const _defaultColumn = {
      title: 'New Column',
      order: 0
    };
    createColumn(boardId, _defaultColumn);
  }

  renderColumns() {
    const columns = this.props.boardColumns.map(column =>
      <li className='column' key={column.id}>
        <h4>{column.title}</h4>
        <CardsIndexContainer bcId={column.id} />
      </li>
    )
    return columns;
  }

  render() {
    return(
      <section className='board-columns'>
        <ul>
          {this.renderColumns()}
        </ul>
        <button onClick={this.addColumn}>add</button>

      </section>
    )
  }

}

export default BoardColumnsShow;