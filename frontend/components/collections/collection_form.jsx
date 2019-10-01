import React from 'react';

class CollectionForm extends React.Component {

  constructor(props) {
    super(props);
    const collection = this.props.collection;
    this.state = { title: collection ? collection.title : ''};
    this.handleSubmit = this.handleSubmit.bind(this);
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
      type
    } = this.props;

    if (type === 'Update') {
      updateCollection(collection, collectionId);
    } else {
      postCollection(collection);
    }
  }

  renderErrors() {
    const errors = this.props.errors.map(err => 
      <li key={err}>
        {err}
      </li>)
    return errors
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collectionId !== 
      this.props.collectionId ) {
        const {type, collection} = this.props;
        this.setState({title: type === 'Update' ? collection.title : '' })
      }
  }

  render() {
    const {type, hidden} = this.props;

    return (
      <div className={hidden ? 'hide' : '' }>
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
        </form>
      </div>
    )
  }
};

export default CollectionForm;