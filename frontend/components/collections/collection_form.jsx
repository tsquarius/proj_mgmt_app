import React from 'react';

class CollectionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: ''}; // need to add flexibility for updating
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const collection = Object.assign({}, this.state);
    this.props.submitCollection(collection);
  }

  renderErrors() {
    const errors = this.props.errors.map(err => 
      <li id={err}>
        {err}
      </li>)

    return errors
  }

  render() {
    return (
      <div className='collection-form'>
        <h3>New Collection</h3>
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
          <button className="submit" onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }

};

export default CollectionForm;