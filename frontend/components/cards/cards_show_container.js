import {connect} from 'react-redux';
import {fetchCard, destroyCard} from '../../actions/card_actions';

import CardShow from './cards_show';

const mapStateToProps = ({entities},{match}) => ({
  card: entities.cards[match.params.cardId]
});

const mapDispatchToProps = dispatch => ({
  deleteCard: card => dispatch(destroyCard(card)),
  fetchCard: cardId => dispatch(fetchCard(cardId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardShow);