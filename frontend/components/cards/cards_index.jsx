import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import NewCardsFormContainer from './new_cards_form_container';

class CardsIndex extends React.Component {

  render() {
    console.log(this.props);
    const collectionId = this.props.match.params.collectionId;
    const cardsList = this.props.cards.map(card => 
        <li key={card.id}>
        <Link to={`/collection/${collectionId}/card/${card.id}`}>{card.title}</Link>
        </li>
      );
    return (
      <ul className='cards-list'>
        {cardsList}
        <NewCardsFormContainer bcId={this.props.bcId} />
        <button className='submit'>Add card...</button>
      </ul>
    )

  }

}

export default withRouter(CardsIndex);