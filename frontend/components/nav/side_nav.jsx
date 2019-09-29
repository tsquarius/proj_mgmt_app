import React from 'react';
import {Link} from 'react-router-dom';
import CollectionIndexContainer from '../collections/collection_index_container';

const SideNav = ({state}) => {

  return (
    <nav className="side-nav">
      <CollectionIndexContainer />
    </nav>
  )
};

export default SideNav;