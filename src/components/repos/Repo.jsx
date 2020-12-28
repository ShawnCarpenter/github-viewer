import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, description }) => {
  return (
    <div>
      {name}
      <p>{description}</p>
    </div>

  );
};

Repo.propTypes = {
  name:PropTypes.string.isRequired,
  description:PropTypes.string
};

export default Repo;
