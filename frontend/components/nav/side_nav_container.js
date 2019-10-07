import {connect} from 'react-redux';
import SideNav from './side_nav';


const mapStateToProps = ({session, entities}, ownProps) => ({
  currentUserId: session.userId,
  collections: entities.collections
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(SideNav);