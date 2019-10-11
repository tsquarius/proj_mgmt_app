import {connect} from 'react-redux';
import {fetchCard, destroyCard, patchCard} from '../../actions/card_actions';
import {closeCardForm} from '../../actions/form_actions';
import CardShow from './cards_show';

const mapDispatchToProps = dispatch => ({
  deleteCard: cardId => dispatch(destroyCard(cardId)),
  fetchCard: cardId => dispatch(fetchCard(cardId)),
  patchCard: (cardId, card) => dispatch(patchCard(cardId, card)),
  closeCardDetails: () => dispatch(closeCardForm()),
});

export default connect(null,mapDispatchToProps)(CardShow);