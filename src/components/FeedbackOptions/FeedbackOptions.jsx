import PropTypes from 'prop-types';
import { FeedbackBtnContainer, FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBtnContainer>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <FeedbackButton
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackButton>
          </li>
        );
      })}
    </FeedbackBtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
