import React from 'react';
import CollectionIndexItem from './collection_index_item';
import {Link} from 'react-router-dom';

class CollectionIndex extends React.Component  {

  componentDidMount() {
    this.props.fetchCollections(this.props.currentUser);
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
        <Link to='/collection/new'>New Collection</Link>
      </ul>
    )
  }

}

export default CollectionIndex;