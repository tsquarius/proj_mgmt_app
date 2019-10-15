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

  const renderCollections = () => {
    const collectionArray = collections.map(col =>
      <List 
        active={`/collection/${col.id}` === location.pathname} 
        key={col.id}
      >
        <Link to={`/collection/${col.id}`}>{col.title}</Link>
      </List>
    )
    return collectionArray;
  }

  return (
    <ul className='side-nav-list'>
      <ListTitle key='title'>Collections</ListTitle>
      {renderCollections()}

      <Button  
        onClick={createNewCollection}>
        + Add New
      </Button>
    
    </ul>
  )
}

export default withRouter(CollectionIndex);