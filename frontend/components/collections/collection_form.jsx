import React from 'react';

class CollectionForm extends React.Component {

  constructor(props) {
    super(props);
    const {collection} = this.props;
    this.state = { title: collection ? collection.title : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.collectionId !==
      this.props.collectionId) {
      const { activeForm, collection } = this.props;
      this.setState({ title: activeForm === 'update' ? collection.title : '' })
    }
  }

  handleChange(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const collection = Object.assign({}, this.state);
    const {
      updateCollection, 
      postCollection, 
      collectionId,
      activeForm
    } = this.props;

    if (activeForm === 'update') {
      updateCollection(collection, collectionId)
        .then(this.props.closeForm());
    } else {
      postCollection(collection)
        .then(this.props.closeForm());
    }
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeForm();
  }

  renderErrors() {
    const errors = this.props.errors.map(err => 
      <li key={err}>
        {err}
      </li>)
    return errors
  }

  render() {
    const {activeForm} = this.props;
    const type = activeForm === 'update' ? 'Update' : 'New';
    return (
      <li className={activeForm ? 'collection-form' : 'hide' }>
        <ul className="errors-list">
          {this.renderErrors()}
        </ul>
        <form>
          <label>
            Collection Name:
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
          </label>
          <button className="submit" onClick={this.handleSubmit}>{type}</button>
          <button className="submit" onClick={this.handleClose}>Close</button>
        </form>
      </li>
    )
  }
};

export default CollectionForm;