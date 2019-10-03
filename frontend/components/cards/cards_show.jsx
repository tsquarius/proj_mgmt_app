// this will open up a detail view of the card
import React from 'react';

class CardsShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.cardId;
    this.props.fetchCard(id);
  }

  componentDidUpdate(prevProps) {
    const oldCard = prevProps.card;
    const newCard = this.props.card;
    const {fetchCard, match} = this.props;

    Object.keys(oldCard).forEach(key => {
      if (oldCard[key] !== newCard[key]) {
        fetchCard(match.params.cardId);
      }
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCard(this.props.match.params.cardId)
    .then(this.props.history.push(`/collection/${this.props.match.params.collectionId}`));
  }

  // should add tags & member later
  render() {
    const {card} = this.props;
    return (
      <section className='card-details'>
        <ul>
          <li>{card.title}</li>
          <li>Due: {card.due_date}</li>
          <li>Description: {card.description}</li>
        </ul>
        <button onClick={this.handleDelete}>x</button>
      </section>
    )
  }

}

export default CardsShow;