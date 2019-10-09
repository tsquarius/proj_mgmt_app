import React, { useState, useEffect, useRef } from 'react';
import BoardShowContainer from '../boards/board_show_container';
import Loading from '../loading';
import styled from 'styled-components';

//Styles
const Container = styled.div``;
const Title = styled.h2`
  padding: 10px;
  font-size: 30px;
  font-style: italic;
`;
const Boards = styled.section`
  display: flex;
  flex-direction: column;
`;

const PseudoBoard = styled.div`
  display: block
  padding: 10px;
  button {
    font-size: 20px;
  }
`;

// end

const CollectionShow = props => {
  console.log(props);

  const { fetchBoards, collectionId, collection, loading, 
    fetchCollection, newBoard } = props;

  const [title, setTitle] = useState(collection ? collection.title : '');

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      fetchCollection(collectionId);
      fetchBoards(collectionId);
      mounted.current = true;
    } else {
      fetchCollection(collectionId);
      fetchBoards(collectionId);
    }
  },[]);

  // useEffect(() => {
  //   fetchCollection(collectionId);
  //   fetchBoards(collectionId);
  // }, []);

  const createNewBoard = e => {
    e.preventDefault();
    newBoard(collectionId ,{title: 'New Board'});
  };

  const boardsList = () => collection.boards.map(id =>
    <BoardShowContainer key={id} boardId={id} />
  );

  if (loading || !collection) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  } else {
    return (
      <Container>
        <Title>{title}</Title>
          <Boards>
            {boardsList()}
          </Boards>
          <PseudoBoard>
            <button className='submit' onClick={createNewBoard}>Add Board...</button>
          </PseudoBoard>

      </Container>
    )
  }
}

export default CollectionShow;