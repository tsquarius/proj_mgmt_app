import { connect } from 'react-redux';
import Home from './home';

import { postCollection } from '../actions/collection_actions';
import { fetchCards } from '../actions/card_actions';
import { objToArray } from '../reducers/selectors';

const mapStateToProps = ({entities, session, ui}) => ({
  collections: entities.collections,
  cards: objToArray(entities.cards),
  user: entities.users[session.userId]
});

const mapDispatchToProps = dispatch => ({
  postCollection: collection => dispatch(postCollection(collection)),
  fetchCards: () => dispatch(fetchCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);