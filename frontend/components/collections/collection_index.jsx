import React from 'react';
import CollectionIndexItem from './collection_index_item';
import { Link } from 'react-router-dom';
import FormContainer from '../collections/collection_form_container';

class CollectionIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeForm: false,
      collection: null
    };
    this.closeForm = this.closeForm.bind(this);
  }

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

  handleDelete(collection) {
    return e => {
      e.preventDefault();
      this.props.destroyCollection(collection);
    };
  }

  renderForm(type, collectionId) {
    return e => {
      e.preventDefault();
      if (type === 'update') {
        this.setState({collectionId: collectionId, activeForm: type});
      } else {
        this.setState({collectionId: null, activeForm: type});
      }
    };
  }

  closeForm(e) {
    e.preventDefault();
    this.setState({activeForm: false});
  }

  renderCollections() {
    const editIcon = '\uD83D\uDD89';
    const collectionArray = this.props.collections.map(col =>
      <li key={col.id}>
        <Link className='btn-link' to={`/collection/${col.id}`}>{col.title}</Link>
        <button className='btn-link' onClick={this.renderForm('update', col.id)}>edit</button>
        <button className='btn-link' onClick={this.handleDelete(col.id)}>delete</button>
      </li>
    )
    return collectionArray;
  }

  render() {
    const {activeForm, collectionId} = this.state;

    return (
      <ul className='side-nav-list'>
        {this.renderCollections()}
        <button className='btn-link' onClick={this.renderForm('new')}>New Collection</button>
        <li className={activeForm ? 'collection-form' : 'hide'}>
          <FormContainer
            type={activeForm === 'update' ? 'Update' : 'New'}
            hidden={activeForm === false ? true : false}
            collectionId={collectionId}
          />
          <button onClick={this.closeForm} className="submit">close</button>
        </li>
      </ul>
    )
  }
}

export default CollectionIndex;