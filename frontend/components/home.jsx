import React, { useEffect } from 'react';
import Loading from './loading';
import CardIndexContainer from './cards/cards_index_container';

import {
  Title, 
  Body
} from '../styled_components/home_styles';

import { Column, HeaderSection, CardsSection } from '../styled_components/board_column_styles';
import { ColumnsSection } from '../styled_components/board_styles';

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

  const collectionsLength = () => {
    return Object.keys(collections).length;
  };

  const dateConverter = date => {
    let convertedDate = new Date(date);
    convertedDate.setDate(convertedDate.getDate() + 1);
    return convertedDate; 
  };

  const renderCards = () => { 
    let upcomingCards = [];
    let pastDueCards = [];
    const today = new Date();

    cards.forEach((card) => {
      let cardDate = dateConverter(card.due_date);
      if (cardDate > today) {
        upcomingCards.push(card);
      } else {
        pastDueCards.push(card);
      }
    });

    const upComingList = upcomingCards.map(upcoming => 
      <CardIndexContainer key={upcoming.id} cardId={upcoming.id} home={true} />
      )
    const pastDueList = pastDueCards.map(past => 
      <CardIndexContainer key={past.id} cardId={past.id} home={true} />
      )
    console.log(pastDueCards);

    return (
      <ColumnsSection>
        <Column>
          <HeaderSection>
            <h4>Upcoming:</h4>
          </HeaderSection>
          <CardsSection>
            {upComingList}
          </CardsSection>
        </Column>
        <Column>
          <HeaderSection>
            <h4>Past due:</h4>
            </HeaderSection>
          <CardsSection>{pastDueList}</CardsSection>
        </Column>
      </ColumnsSection>
    );

  }

  if (!collections) {
    return(
      <Loading />
    )
  }

  if (collectionsLength() > 0 ) {
    return [
      <Title key='title'>Home page</Title>,
      <Body key='body'> 
        <h3>Welcome back!</h3>
        <h4>The following cards may need your attention:</h4>
        {renderCards()}
      </Body>
    ]
  } else {
    return [
      <Title key='title'>Home page</Title>,
      <Body key='body'>
        <h3>Let's get started...</h3>
        <h4>
          Click 
          <button onClick={createNewCollection}>'+ Add New'</button> 
          on the left to start a new Collection
        </h4>
      </Body>
    ]
  }

};

export default Home;