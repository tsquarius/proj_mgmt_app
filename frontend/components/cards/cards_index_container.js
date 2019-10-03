import {connect} from 'react-redux';
import {postCard} from '../../actions/card_actions';
import {cardColumnArray} from '../../reducers/selectors';
import CardsIndex from './cards_index';

const mapStateToProps = ({entities}, {bcId}) => ({
  cards: cardColumnArray(entities.cards, bcId)
});

const mapDispatchToProps = dispatch => ({
  newCard: (bcId, card) => dispatch(postCard(bcId,card))
});

export default connect(mapStateToProps,mapDispatchToProps)(CardsIndex);