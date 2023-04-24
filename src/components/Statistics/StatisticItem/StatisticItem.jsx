import React from 'react';
import PropTypes from 'prop-types';
import { Label, Item } from './StatisticItem.styled';

export const StatisticItem = ({ label, value }) => (
  <Item>
    <Label>
      {label}: {value}
    </Label>
  </Item>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
