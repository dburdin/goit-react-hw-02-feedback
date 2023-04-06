import PropTypes from 'prop-types';

import { Options, OptionsButton } from './FeedBackOptions.styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionsButton
              onClick={() => onLeaveFeedback(option)}
              type="button"
            >
              {option}
            </OptionsButton>
          </li>
        );
      })}
    </Options>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
