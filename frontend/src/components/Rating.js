import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((currentStar) => {
        return (
          <span key={currentStar}>
            {' '}
            <i
              style={{ color }}
              className={
                value >= currentStar
                  ? 'fas fa-star'
                  : value >= currentStar - 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>{' '}
          </span>
        );
      })}
      {value} From {text}
    </div>
  );
};
Rating.defaultProps = {
  color: '#f8e825',
};
Rating.prototype = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Rating;
