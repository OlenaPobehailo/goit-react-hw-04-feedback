import PropTypes from 'prop-types';
import { StyledLi, StyledList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <StyledList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <StyledLi $percent={percent}>Positive feedback: {percent} %</StyledLi>
    </StyledList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;
