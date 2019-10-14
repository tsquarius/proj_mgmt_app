import React, { useState } from 'react';

import { ToggleForm, ButtonContainer } from '../../styled_components/member_styles';
import { TagSelector, CardFormItems } from '../../styled_components/modal_styles';

const MemberForm = props => {
  const { collectionId, addMember } = props;

  const [member, setMember] = useState('');
  const [memberParam, setMemberParam] = useState('username');
  const [active, setActive] = useState(false)

  const memberObj = { [memberParam]: member };


  const handleMemberParamChange = e => {
    e.preventDefault();
    setMemberParam(e.target.value);
  };

  const handleMemberInputChange = e => {
    e.preventDefault();
    setMember(e.target.value);
  };

  const submitMember = e => {
    e.preventDefault();
    addMember(collectionId, memberObj );
  };

  const toggleActive = e => {
    e.preventDefault();
    setActive(!active);
  };

  return[
    <ButtonContainer key='add-member'>
      <button onClick={toggleActive}>
        + Add member
      </button>
    </ButtonContainer>,
    
    <ToggleForm key='member-form' active={active}>
      
      <CardFormItems key='search-param'>
        <span>Add by:</span>
        <TagSelector onChange={handleMemberParamChange} defaultValue={memberParam}>
          <option value='username'>Username</option>
          <option value='email'>Email</option>
        </TagSelector>
      </CardFormItems>

      <CardFormItems key='search-input'>
        <span>User:</span>
        <input value={member} onChange={handleMemberInputChange} />
      </CardFormItems>

      <button key='submit' onClick={submitMember}>Submit</button>
    </ToggleForm>
  ]


};

export default MemberForm;