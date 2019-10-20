import React, { useEffect } from 'react';
import Loading from './loading';
import CardIndexContainer from './cards/cards_index_container';
import { dateConverter, daysDifference, objLength } from '../util/helper_util';

import { 
  Column, 
  CardsSection 
} from '../styled_components/board_column_styles';

const Home = props => {
  const {collections, postCollection, 
    fetchCards, cards} = props;

  useEffect(() => {
    fetchCards();
  },[]);

  const createNewCollection = e => {
    e.preventDefault();
    postCollection({ title: 'New Collection' });
  };

  const renderCards = () => { 
    let upcomingCards = [];
    let pastDueCards = [];
    const today = new Date();

    cards.forEach((card) => {
      const cardDate = dateConverter(card.due_date);
      const daysFromToday = daysDifference(cardDate, today);

      if (daysFromToday < 6 && daysFromToday >= 0  ) {
        upcomingCards.push(card);
      } else if (daysFromToday < 0) {
        pastDueCards.push(card);
      }
    });

    const upComingList = upcomingCards.map(upcoming => 
      <CardIndexContainer key={upcoming.id} cardId={upcoming.id} home={true} />
      )
    const pastDueList = pastDueCards.map(past => 
      <CardIndexContainer key={past.id} cardId={past.id} home={true} />
      )

    if (upcomingCards.length + pastDueCards.length === 0) {
      return false;
    } else {
      return (
        <div className='board-content'>
          <Column className='board-column'>
            <h3>
              <span>Upcoming:</span>
            </h3>
            <CardsSection>
              {upComingList}
            </CardsSection>
          </Column>

          <Column className='board-column'>
            <h3>
              <span>Past due:</span>
            </h3>
            <CardsSection>{pastDueList}</CardsSection>
          </Column>
        </div>
      );
    }
  }

  if (!collections) {
    return(
      <Loading />
    )
  }

  if (objLength(collections) > 0 && renderCards() ) {
    return [
      <article className="welcome" key='welcome'>
        <h2 key='title'>Home page</h2>
        <h3 key='subtitle'>Welcome back!</h3>
        
          The following cards may need your attention:
      </article>,
      <div className='collection' key='collection'>
        <div className='board'>
          {renderCards()}
        </div>
      </div>
      
    ]
  } else if (objLength(collections) > 0 ) {
    return (
      <article className="welcome">
        <h2 key='title'>Home page</h2>
        <h3 key='subtitle'>Welcome back!</h3>
        <p key='content'>
          There are no cards that require your immediate attention.
        </p>
      </article>
    )
  } else {
    return (
      <article className="welcome">
        <h2 key='title'>Home page</h2>
        <h3 key='subtitle'>Let's get started...</h3>
        <p key='content'>
          Click 
          <button className="button" onClick={createNewCollection}>'+ Add New'</button> 
          on the left to start a new Collection
        </p>
      </article>
    )
  }

};

export default Home;