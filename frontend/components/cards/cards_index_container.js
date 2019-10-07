import {connect} from 'react-redux';
import {renderNewCardForm} from '../../actions/form_actions';
import CardsIndex from './cards_index';

const mapStateToProps = ({entities, ui}, {cardArray}) => {
  const cards = cardArray.map(id => entities.cards[id]);
  return ({
    cards: cards,
    activeForm: ui.forms.cards
  });
};

const mapDispatchToProps = dispatch => ({
  newCard: (bcId) => dispatch(renderNewCardForm(bcId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardsIndex);