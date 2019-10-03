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

  removeColumn(bcId) {
    return e => {
      e.preventDefault();
      this.props.destroyBoardColumn(bcId);
    };
  }

  renderColumns() {
    const columns = this.props.boardColumns.map(column =>
      <li className='column' key={column.id}>
        <header className='column-header'>
          <h4>{column.title}</h4>
          <button onClick={this.removeColumn(column.id)} className='submit'>x</button>        
        </header>
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
          <li>
          <button className='submit' onClick={this.addColumn}>Add Column...</button>
          </li>
        </ul>
        

      </section>
    )
  }

}

export default BoardColumnsShow;