import {connect} from 'react-redux';
import {cardColumnArray} from '../../reducers/selectors';
import {renderNewCardForm} from '../../actions/form_actions';
import CardsIndex from './cards_index';

const mapStateToProps = ({entities, ui}, {bcId}) => ({
  cards: cardColumnArray(entities.cards, bcId),
  activeForm: ui.forms.cards
});

const mapDispatchToProps = dispatch => ({
  newCard: (bcId) => dispatch(renderNewCardForm(bcId))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardsIndex);