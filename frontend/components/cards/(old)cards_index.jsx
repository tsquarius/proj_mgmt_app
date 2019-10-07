import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import NewCardsFormContainer from './new_cards_form_container';
import {Draggable} from 'react-beautiful-dnd';


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
    const cardsList = this.props.cards.map((card,index) => 
        <Draggable draggableId={card.id} index={index}>
          {provided => (
              <div className='card' key={card.id}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                <Link to={`/collection/${collectionId}/card/${card.id}`}>{card.title}</Link>
              </div>
          )}
        </Draggable>
      );

    return (
      <React.Fragment>
        {cardsList}
        <div className = {activeForm.bcId === bcId ? '' : 'hide'}>
          <NewCardsFormContainer bcId={bcId} />
        </div>
        <button className='submit' onClick={this.renderNewCardForm(bcId)}>Add card...</button>
      </React.Fragment>
    )

  }

}

export default withRouter(CardsIndex);