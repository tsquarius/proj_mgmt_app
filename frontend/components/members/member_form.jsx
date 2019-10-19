import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleForm = styled.form`
  display: ${props => props.active ? 'flex' : 'none'};
  flex-direction: column;
  margin-top: 5px;
  li {
    display: flex;
    width: 50%;
      span {
        margin-right: 5px;
      }
  }
`;
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
    <button className='button' key='add-member' onClick={toggleActive}>
      + Add member
    </button>,
    <ToggleForm key='toggle' active={active}>          
      <li className='modal-form-item' key='search-param'>
        <span>Add by:</span>
        <select onChange={handleMemberParamChange} defaultValue={memberParam}>
          <option value='username'>Username</option>
          <option value='email'>Email</option>
        </select>
      </li>

      <li className='modal-form-item' key='search-input'>
        <span>User:</span>
        <input value={member} onChange={handleMemberInputChange} />
      </li>

      <button className='button' onClick={submitMember}>Submit</button>
    </ToggleForm>
  ]


};

export default MemberForm;