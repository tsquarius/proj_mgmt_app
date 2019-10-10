import {connect} from 'react-redux';
import {renderUpdateCardForm} from '../../actions/form_actions';
import {destroyCard} from '../../actions/card_actions';

import CardsIndex from './cards_index';

const mapStateToProps = ({entities, ui}, {cardId}) => ({
  card: entities.cards[cardId],
  activeForm: ui.forms.cards
});

const mapDispatchToProps = dispatch => ({
  renderCardDetails: cardId => dispatch(renderUpdateCardForm(cardId)),
  deleteCard: cardId => dispatch(destroyCard(cardId)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CardsIndex);