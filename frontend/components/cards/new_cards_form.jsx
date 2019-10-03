import React from 'react';

class CardsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const {bcId, postCard} = this.props;
    const card = Object.assign({}, this.state);
    postCard(bcId, card);
  }

  render() {

    return(
      <form>
        <textarea onChange={this.handleChange} value={this.state.title} />
        <button className='submit' onClick>save</button>
        <button className='submit'>x</button>
      </form>
    )
  }
}

export default CardsForm;