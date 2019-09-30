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
    const collectionId = this.props.collection.id;

    this.props.submitCollection(collection, collectionId)
      .then(this.props.history.push('/'));
  }

  renderErrors() {
    const errors = this.props.errors.map(err => 
      <li key={err}>
        {err}
      </li>)

    return errors
  }

  componentDidUpdate(prevProps) {
    if (!this.props.collection) return;

    if (prevProps.match.params.collectionId !== 
      this.props.match.params.collectionId ) {
        this.setState({title: this.props.collection.title })
      }
  }

  render() {
    const {type} = this.props;
    return (
      <div className='collection-form'>
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