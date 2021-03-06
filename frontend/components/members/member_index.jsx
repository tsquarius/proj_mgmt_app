import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MemberFormContainer from './member_form_container';
import styled from 'styled-components';

const TeamList = styled.li`
  display:flex;
  font-size: 15px;
  justify-content: space-between;
  margin-bottom: 5px;
  span {
    font-size: 20px;
  }
`;

const MemberIndex = props => {
  const { members, removeMember, 
    collectionId, title, 
    detailsActive, closeDetails } = props;

  const submitRemoveMember = username => e => {
    e.preventDefault();
    removeMember(collectionId, {username: username});
  };

  const closeModal = e => {
    e.preventDefault();
    closeDetails();
  };

  const renderMembers = () => members.map((member, index) =>
    <TeamList key={`member-${index}`}>
      <span>{member}</span>
      <button 
        title='remove member' 
        className='button' 
        onClick={submitRemoveMember}>Remove</button>
    </TeamList>
  )

  return(
    <div className={detailsActive ? 'modal-screen active' : 'modal-screen'}>
      <div className={detailsActive ? 'modal-content active' : 'modal-screen'}>
        <section className='modal-details'>
          <Scrollbars
            autoHeight
            autoHeightMin={0}
            autoHeightMax={400}
            hideTracksWhenNotNeeded={true}
            key='card-scroll'
          >
            <h3>
              <span>{title} members</span>
            </h3>
            <a className='button modal' onClick={closeModal}>x</a>
            <ul>
              {renderMembers()}
            </ul>
          </Scrollbars>
          <MemberFormContainer collectionId={collectionId} key='member-form' />
        </section>
      </div>
    </div>
  )
};

export default MemberIndex;
