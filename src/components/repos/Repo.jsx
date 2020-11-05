import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url, description }) => {
  return (
    <div>
      <a href={url} rel="noreferrer" target="_blank">
        {name}
      </a>
      <p>{description}</p>
    </div>
  );
};

Repo.propTypes = {
  name:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  description:PropTypes.string
};

export default Repo;
