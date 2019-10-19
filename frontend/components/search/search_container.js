import {connect} from 'react-redux';
import {searchCards, clearSearch} from '../../actions/search_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  startSearch: (param, query) => dispatch(searchCards(param, query)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(null, mapDispatchToProps)(Search);