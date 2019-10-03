import {connect} from 'react-redux';
import {postCard} from '../../actions/card_actions';
import NewCardsForm from './new_cards_form';


const mapDispatchToProps = dispatch => ({
  postCard: (bcId, card) => dispatch(postCard(bcId, card))
});

export default connect(null, mapDispatchToProps)(NewCardsForm);