import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {List, Button} from '../../styled_components/collection_styles';

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

  createNewCollection() {
    return e => {
      e.preventDefault();
      this.props.postCollection({title: 'New Collection'});
    };
  }

  newForm() {
    return e => {
      e.preventDefault();
      this.props.newCollection();
    };
  }
  // end

  renderCollections() {
    const collectionArray = this.props.collections.map(col =>
      <List 
        active={`/collection/${col.id}` === this.props.location.pathname} 
        key={col.id}
      >
        <Link to={`/collection/${col.id}`}>{col.title}</Link>
        {/* <button className='btn-link' onClick={this.updateForm(col.id)}>edit</button>
        <button className='btn-link' onClick={this.handleDelete(col.id)}>delete</button> */}
      </List>
    )
    return collectionArray;
  }

  render() {
    return (
      <ul className='side-nav-list'>
        {this.renderCollections()}

        <Button  
          onClick={this.createNewCollection()}>
          + Add New
        </Button>
        

      </ul>
    )
  }
}

export default withRouter(CollectionIndex);