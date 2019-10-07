import React from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../collections/collection_form_container';
import styled from 'styled-components';

class CollectionIndex extends React.Component {

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

  // modifying collection actions
  handleDelete(collection) {
    return e => {
      e.preventDefault();
      this.props.destroyCollection(collection);
    };
  }
  
  updateForm(id) {
    return e => {
      e.preventDefault();
      this.props.updateCollection(id);
    };
  }

  // need to refactor later to just click to add new form
  newForm() {
    return e => {
      e.preventDefault();
      this.props.newCollection();
    };
  }
  // end

  renderCollections() {
    const editIcon = '\uD83D\uDD89';
    const collectionArray = this.props.collections.map(col =>
      <li key={col.id}>
        <Link className='btn-link' to={`/collection/${col.id}`}>{col.title}</Link>
        {/* <button className='btn-link' onClick={this.updateForm(col.id)}>edit</button>
        <button className='btn-link' onClick={this.handleDelete(col.id)}>delete</button> */}
      </li>
    )
    return collectionArray;
  }

  render() {
    return (
      <ul className='side-nav-list'>
        {this.renderCollections()}
        <button className='btn-link' onClick={this.newForm()}>New Collection</button>
        <FormContainer />
      </ul>
    )
  }
}

export default CollectionIndex;