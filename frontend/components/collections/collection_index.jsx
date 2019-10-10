import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FormContainer from '../collections/collection_form_container';
import styled from 'styled-components';

const List = styled.li`
  cursor: pointer;
  margin: 0 0px 20px 10px;
  font-weight: 500;
  width: 65%;
  background: ${props => 
    props.active ? 'white' : 'inherit' }
  color: ${props =>
    props.active ? '#6D6F6D' : 'white' }
  a {
    display: block;
    padding: 4px 0px 0px 13px;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  margin-left: 10px;
  cursor: pointer;
  width: 65%;
  display: block;
  padding: 4px 0px 4px 13px;
  text-align: left;
  :hover {
    background: rgb(233, 132, 0);
  }
`;

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