import React from 'react';
import PropTypes from 'prop-types';

import { Row, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Row>
        {Object.keys(options).map(buttonName => {
          return (
            <Button
              key={buttonName}
              onClick={() => onLeaveFeedback(buttonName)}
            >
              {buttonName}
            </Button>
          );
        })}
      </Row>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
