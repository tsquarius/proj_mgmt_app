import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({entities, session}) => ({
  collections: entities.collections,
  user: entities.users[session.userId]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps)(Home);