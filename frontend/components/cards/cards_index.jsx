import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class CardsIndex extends React.Component {

  render() {
    const collectionId = this.props.match.params.collectionId;

    const cardsList = this.props.cards.map(card => 
        <li key={card.id}>
        <Link to={`/collection/${collectionId}/card/${card.id}`}>{card.title}</Link>
        </li>
      );
    return (
      <ul className='cards-list'>
        {cardsList}
      </ul>
    )

  }

}

export default withRouter(CardsIndex);