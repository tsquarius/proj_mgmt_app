import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import NewCardsFormContainer from './new_cards_form_container';

class CardsIndex extends React.Component {

  renderNewCardForm(bcId) {
    return e => {
      e.preventDefault();
      this.props.newCard(bcId);
    }
  }

  render() {
    const {activeForm, bcId} = this.props;
    const collectionId = this.props.match.params.collectionId;
    const cardsList = this.props.cards.map(card => 
        <li key={card.id}>
        <Link to={`/collection/${collectionId}/card/${card.id}`}>{card.title}</Link>
        </li>
      );
    return (
      <ul className='cards-list'>
        {cardsList}
        <div className = {activeForm.bcId === bcId ? '' : 'hide'}>
          <NewCardsFormContainer bcId={bcId} />
        </div>
        <button className='submit' onClick={this.renderNewCardForm(bcId)}>Add card...</button>
      </ul>
    )

  }

}

export default withRouter(CardsIndex);