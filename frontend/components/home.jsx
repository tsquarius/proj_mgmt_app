import React, { useEffect } from 'react';
import Loading from './loading';
import CardIndexContainer from './cards/cards_index_container';

import {
  Title, 
  Body
} from '../styled_components/home_styles';

import { 
  Column, 
  HeaderSection, 
  CardsSection 
} from '../styled_components/board_column_styles';

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

  const daysDifference = (date2, date1) => {
    const cardDate = date2.getTime();
    const todayDate = date1.getTime();

    return parseInt((cardDate - todayDate) / (24 * 3600 * 1000));
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

  if (collectionsLength() > 0 && cards.length > 0 ) {
    return [
      <Title key='title'>Home page</Title>,
      <Body key='body'> 
        <h3>Welcome back!</h3>
        <h4>The following cards may need your attention:</h4>
        {renderCards()}
      </Body>
    ]
  } else if (collectionsLength() > 0 ) {
    return [
      <Title key='title'>Home page</Title>,
      <Body key='body'>
        <h3>Welcome back!</h3>
        <h4>There are no cards that require your immediate attention.</h4>
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