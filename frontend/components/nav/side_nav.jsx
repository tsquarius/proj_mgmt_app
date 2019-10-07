import React from 'react';
import CollectionIndexContainer from '../collections/collection_index_container';

const SideNav = ({state}) => {

  return (
    <nav className="side-nav">
      <CollectionIndexContainer />
    </nav>
  )
};

export default SideNav;