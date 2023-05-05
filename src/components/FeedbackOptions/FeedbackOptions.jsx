import PropTypes from 'prop-types';
import { Button, Li, Ul } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const ratings = Object.keys(options);
  return (
    <Ul>
      {ratings.map(rating => (
        <Li key={rating}>
          <Button onClick={() => onLeaveFeedback(rating)}> {rating}</Button>
        </Li>
      ))}
    </Ul>
  );
};
FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};
