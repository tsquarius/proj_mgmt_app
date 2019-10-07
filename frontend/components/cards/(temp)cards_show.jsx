// this will open up a detail view of the card
import React from 'react';
import {withRouter} from 'react-router-dom';

class CardsShow extends React.Component {

  constructor(props) {
    super(props);
    const {card} = this.props;
    this.state = {
      title: card ? card.title : ' ',
      due_date: card ? card.due_date : ' ',
      description: card ? card.description : ' ',
      color: 'blue',
      title_disabled: true,
      due_date_disabled: true,
      description_disabled: true,
      color_disabled: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.cardId;
    this.props.fetchCard(id);
  }

  componentDidUpdate(prevProps) {
    const oldCard = prevProps.card;
    const newCard = this.props.card;
    const {fetchCard, match} = this.props;

    if (Object.keys(oldCard).length === 0) {
      fetchCard(match.params.cardId);
    } else if (Object.keys(oldCard).length !== Object.keys(newCard).length){
      fetchCard(match.params.cardId);
    } else {
      Object.keys(oldCard).forEach(key => {
        if (oldCard[key] !== newCard[key]) {
          fetchCard(match.params.cardId);
        }
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const card = Object.assign({}, this.state);
    const cardId = this.props.match.params.cardId;
    this.props.patchCard(cardId, card);
  }

  handleChange(type) {
    return e => {
      e.preventDefault();
      this.setState({[type]: e.target.value});
    };
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCard(this.props.match.params.cardId)
    .then(this.props.history.push(`/collection/${this.props.match.params.collectionId}`));
  }

  toggleInput(type) {
    return e => {
      e.preventDefault();
      this.setState({[type]: !this.state[type]});
    };
  }

  // debounce(func, wait) {
  //   let timeout;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     const later = function () {
  //       timeout = null;
  //       func.apply(context, args);
  //     };
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //   };
  // };

  // throttle(func, interval) {
  //   let tooSoon = false;
  //   return (...args) => {
  //     if (!tooSoon) {
  //       tooSoon = true;
  //       setTimeout(() => tooSoon = false, interval);
  //       func(...args);
  //     }
  //   }
  // }

  // should add tags & member later
  render() {

    const {
      title_disabled, 
      due_date_disabled, 
      description_disabled, 
      color_disabled } = this.state;
      
    return (
      <section className='card-details'>
        <ul>
          <li onClick={this.toggleInput('title_disabled')}>
            <input  
              value={this.state.title} 
              disabled={title_disabled} 
              onChange={this.handleChange('title')}/>
          </li>
          <li onClick={this.toggleInput('due_date_disabled')}>Due: 
            <input 
              value={this.state.due_date} 
              disabled={due_date_disabled}
              onChange={this.handleChange('due_date')} />
          </li>
          <li onClick={this.toggleInput('description_disabled')}>Description: 
            <input 
              value={this.state.description} 
              disabled={description_disabled}
              onChange={this.handleChange('description')} />
          </li>
          <li onClick={this.toggleInput('color_disabled')}>Color: 
            <input 
              value={this.state.color} 
              disabled={color_disabled}
              onChange={this.handleChange('color')} />
          </li>
        </ul>
        <button className='submit' onClick={this.handleSubmit}>Save</button>
        <button className='submit' onClick={this.handleDelete}>x</button>
      </section>
    )
  }

}

export default withRouter(CardsShow);