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
      <Button title='remove member' className='btn-modal' onClick={submitRemoveMember}>Remove</Button>
    </TeamList>
  )

  return[
    <ToggleMembers key='member-modal' active={detailsActive}>
      <div className='modal-screen'>
        <div className='modal-content'>
          <Scrollbars
            autoHeight
            autoHeightMin={0}
            autoHeightMax={400}
            hideTracksWhenNotNeeded={true}
            key='card-scroll'
          >
            <Title key='title' className='h3'>
              <span>{title} members</span>
              <Button title='Close screen' className='btn-modal' onClick={closeModal}>x</Button>
            </Title>
            <ul>
              {renderMembers()}
            </ul>
          </Scrollbars>
          <MemberFormContainer key='member-form' />
        </div>
      </div>
    </ToggleMembers>
  ]

};

export default MemberIndex;
