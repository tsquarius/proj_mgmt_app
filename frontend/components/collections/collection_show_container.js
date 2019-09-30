import {connect} from 'react-redux';
import CollectionShow from './collection_show';

// need to load board in here later
const mapStateToProps = ({entities}, {match}) => ({
  collection: entities.collections[match.params.collectionId]
});


//import fetchCollection && then include the boards in here
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(CollectionShow);