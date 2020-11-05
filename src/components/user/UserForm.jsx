import React from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ userName, onSubmit, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="userName"
          onChange={onChange}
          value={userName}/>
        <button>Get User Info</button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  userName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UserForm;
