import React from 'react';

class CardsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {bcId, postCard} = this.props;
    const card = Object.assign({}, this.state);
    postCard(bcId, card)
    .then(() => {
      this.setState({title: ''});
      this.props.closeForm();
    });
  }

  handleClose(e) {
    e.preventDefault();
    this.props.closeForm();
  }

  render() {

    return(
      <form>
        <textarea onChange={this.handleChange} value={this.state.title} />
        <button className='submit' onClick={this.handleSubmit}>save</button>
        <button className='submit' onClick={this.handleClose}>x</button>
      </form>
    )
  }
}

export default CardsForm;