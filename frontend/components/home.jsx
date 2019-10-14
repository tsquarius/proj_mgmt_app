import React from 'react';
import styled from 'styled-components';
import Loading from './loading';

const Body = styled.section`
  margin-top: 15px;
  font-size: 30px;
`;

const Welcome = styled.p`
  margin-bottom: 15px;
`;

const Home = props => {
  const {collections, user} = props;

  const collectionsLength = () => {
    return Object.keys(collections).length;
  };

  if (!collections) {
    return(
      <Loading />
    )
  }

  if (collectionsLength() > 0 ) {
    return (
      <Body>
        <h2>
          Hello {user.username}! 
          Welcome back!
        </h2>
      </Body>
    )
  } else {
    return (
      <Body>
        <h2>
          <Welcome>Hey {user.username}!</Welcome>

          <p>Let's get started...</p>
          <p>Click '+ Add New' on the left to make a new Collection</p>
        </h2>
      </Body>
    )
  }

};

export default Home;