import React from 'react';
import CollectionIndexItem from './collection_index_item';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import NewCollectionFormContainer from './new_form_container';

class CollectionIndex extends React.Component  {

  componentDidMount() {
    this.props.fetchCollections(this.props.currentUser);
  }
  
  componentDidUpdate(prevProps) {
    if ((prevProps.collections.length !== this.props.collections.length) ||
      (prevProps.currentUser !== this.props.currentUser)
    ) {
      this.props.fetchCollections(this.props.currentUser);
    }
    // if (prevProps.collections.slice(-1)[0].title !== this.props.collections.slice(-1)[0].title)
  }

  render() {
    const {collections} = this.props;
    const collectionArray = collections.map(collection => 
      <li key={collection.id}>
        {collection.title}
      </li>
      )

    return (
      <ul className='side-nav-list'>
        {collectionArray}
        <Link className='btn-link' to='/collection/new'>New Collection</Link>
        <ProtectedRoute path='/collection/new' component={NewCollectionFormContainer} />
      </ul>
    )
  }

}

export default CollectionIndex;