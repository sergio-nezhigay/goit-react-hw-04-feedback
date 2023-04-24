import React from 'react';
import PropTypes from 'prop-types';

import { StatisticItem } from './StatisticItem/StatisticItem';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <StatisticItem key="Good" label="Good" value={good} />
      <StatisticItem key="Neutral" label="Neutral" value={neutral} />
      <StatisticItem key="Bad" label="Bad" value={bad} />
      <StatisticItem key="Total" label="Total" value={total} />
      <StatisticItem
        key="Positive feedback"
        label="Positive feedback"
        value={`${positivePercentage}%`}
      />
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
