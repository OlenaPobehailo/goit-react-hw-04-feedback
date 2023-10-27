import PropTypes from 'prop-types';

import { StyledButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButton type="button" name={options} onClick={onLeaveFeedback}>
      {options}
    </StyledButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
