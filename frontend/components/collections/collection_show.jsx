import React from 'react';

class CollectionShow extends React.Component {

  componentDidUpdate(prevProps) {
    
  }

  render() {
    const {collection} = this.props;
    
    return (
      <div className='collection-show'>
        <h2>{collection ? collection.title : ''}</h2>
      </div>
    )
  }
}

export default CollectionShow;