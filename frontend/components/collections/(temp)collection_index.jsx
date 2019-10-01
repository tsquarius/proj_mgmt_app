import React from 'react';
import CollectionIndexItem from './collection_index_item';
import {Switch, Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import NewCollectionFormContainer from './new_form_container';
import UpdateCollectionContainer from './update_form_container'; 


class CollectionIndex extends React.Component  {

  componentDidMount() {
    this.props.fetchCollections();
  }
  
  componentDidUpdate(prevProps) {
    if ((prevProps.collections.length !== this.props.collections.length) ||
      (prevProps.currentUser !== this.props.currentUser)
    ) {
      this.props.fetchCollections();
    }
    // if (prevProps.collections.slice(-1)[0].title !== this.props.collections.slice(-1)[0].title)
  }

  handleDelete(collection) {
    return e => {
      e.preventDefault();
      this.props.destroyCollection(collection);
    }
  }

  render() {
    const {collections} = this.props;
    const editIcon = '\uD83D\uDD89';
    console.log(this.props);
    const collectionArray = collections.map(collection => 
      <li key={collection.id}>
        <Link className='btn-link' to={`/collection/${collection.id}`}>{collection.title}</Link>
        <Link className='btn-link' to ={`/collection/edit/${collection.id}`}>edit</Link>
        <button className='btn-link' onClick={this.handleDelete(collection.id)}>delete</button>
      </li>
      )

    return (
      <ul className='side-nav-list'>
        {collectionArray}
        <Link className='btn-link' to='/collection/new'>New Collection</Link>
        <ProtectedRoute 
          exact={true} 
          path='/collection/new' 
          component={NewCollectionFormContainer} />
        <ProtectedRoute 
          exact={true} 
          path='/collection/edit/:collectionId' 
          component={UpdateCollectionContainer} />
      </ul>
    )
  }

}

export default CollectionIndex;

