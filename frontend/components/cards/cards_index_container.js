import {connect} from 'react-redux';
import {renderNewCardForm} from '../../actions/form_actions';
import {destroyCard} from '../../actions/card_actions';

import CardsIndex from './cards_index';

const mapStateToProps = ({entities, ui}, {cardId}) => ({
  card: entities.cards[cardId],
  activeForm: ui.forms.cards
});

//     cards: cards,
//     activeForm: ui.forms.cards

// };

const mapDispatchToProps = dispatch => ({
  newCard: (bcId) => dispatch(renderNewCardForm(bcId)),
  deleteCard: cardId => dispatch(destroyCard(cardId)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CardsIndex);