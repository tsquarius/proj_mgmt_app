import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const [active, setActive] = useState(false);

  const toggleActive = e => {
    e.preventDefault();
    setActive(!active);
  };


  const createNewCollection = e => {
    e.preventDefault();
    postCollection({title: 'New Collection'});
  };

  const renderCollections = () => {
    const collectionArray = collections.map(col =>
      <li 
        className={`/collection/${col.id}` === location.pathname ? 'highlight' : undefined } 
        key={col.id}
      >
        <Link to={`/collection/${col.id}`}>{col.title}</Link>
      </li>
    )
    return collectionArray;
  }

  return [
    <aside className={active ? 'side active' : 'side'} key='side-panel'>
      <a className='button close' onClick={toggleActive}>x</a>

      <h3 key='nav-title'>Collections</h3>
      <ul key='nav-links'>
        {renderCollections()}
        <a className='button'  
          onClick={createNewCollection}>
          + Add New
        </a>
      </ul>
    </aside>,
    <FontAwesomeIcon
      className='button hamburger'
      onClick={toggleActive}
      key='hamburger'
      icon='bars' />
  ]
}

export default withRouter(CollectionIndex);