import React from 'react';

// eslint-disable-next-line react/prop-types
const Loader = ({ success }) => {
  let loaderClass = 'loader__inner';

  if (success) {
    loaderClass += ' loader__success';
  }
  return (
    <div className="loader">
      <div className={loaderClass} />
    </div>
  );
};

export default Loader;
