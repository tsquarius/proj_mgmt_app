import React, {useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {List, Button} from '../../styled_components/collection_styles';

const CollectionIndex = props => {

  const { fetchCollections, collections, currentUser, 
    postCollection, redirectId, location
  } = props;

  console.log(props);

  useEffect(() => {
    fetchCollections();
  }, [currentUser]);

  useEffect(() => {
    if (props.location.pathname === '/') {
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
      {renderCollections()}

      <Button  
        onClick={createNewCollection}>
        + Add New
      </Button>
    
    </ul>
  )
}

export default withRouter(CollectionIndex);