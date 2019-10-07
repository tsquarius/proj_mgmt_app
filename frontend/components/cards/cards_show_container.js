import {connect} from 'react-redux';
import {fetchCard, destroyCard, patchCard} from '../../actions/card_actions';

import CardShow from './cards_show';

const mapStateToProps = ({entities},{match}) => ({
  card: entities.cards[match.params.cardId]
});

const mapDispatchToProps = dispatch => ({
  deleteCard: cardId => dispatch(destroyCard(cardId)),
  fetchCard: cardId => dispatch(fetchCard(cardId)),
  patchCard: (cardId, card) => dispatch(patchCard(cardId, card))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardShow);