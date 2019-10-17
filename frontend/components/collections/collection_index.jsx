import React, {useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  List, 
  Button,
  ListTitle
} from '../../styled_components/collection_styles';

const CollectionIndex = props => {

  const { fetchCollections, collections, currentUser, 
    postCollection, redirectId, location
  } = props;

  useEffect(() => {
    fetchCollections();
  }, [currentUser]);

  useEffect(() => {
    if (props.location.pathname === '/' && typeof redirectId !== 'object' ) {
      props.history.push(`/collection/${redirectId}`);
    }
  },[redirectId]);

  const createNewCollection = e => {
    e.preventDefault();
    postCollection({title: 'New Collection'});
  };

  // consider adding the "active" class for this link, trigger onClick
  const renderCollections = () => {
    const collectionArray = collections.map(col =>
      <li 
        active={`/collection/${col.id}` === location.pathname ? true : undefined} 
        key={col.id}
      >
        <Link to={`/collection/${col.id}`}>{col.title}</Link>
      </li>
    )
    return collectionArray;
  }

  return [ 
    <h3 key='nav-title'>Collections</h3>,
    <ul key='nav-links'>
      {renderCollections()}
      <a className='button'  
        onClick={createNewCollection}>
        + Add New
      </a>
    </ul>
  ]
}

export default withRouter(CollectionIndex);