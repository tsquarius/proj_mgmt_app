import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import MemberFormContainer from './member_form_container';
import { Title } from '../../styled_components/modal_styles';

import {
  ToggleMembers,  
  Button, 
  TeamList} from '../../styled_components/member_styles';

const MemberIndex = props => {
  const { members, removeMember, collectionId, title, detailsActive, closeDetails } = props;

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
      <Button title='remove member' className='button' onClick={submitRemoveMember}>Remove</Button>
    </TeamList>
  )

  return[
    <div className={detailsActive ? 'modal-screen active' : 'modal-screen'}>
      <div className={detailsActive ? 'modal-content active' : 'modal-screen'}>
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
          <button 
            title='Close screen' 
            className='button modal' 
            onClick={closeModal}>x</button>
          <ul>
            {renderMembers()}
          </ul>
        </Scrollbars>
        <MemberFormContainer key='member-form' />
      </div>
    </div>
  ]
};

export default MemberIndex;
