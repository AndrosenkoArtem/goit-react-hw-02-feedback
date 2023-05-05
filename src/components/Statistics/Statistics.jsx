import PropTypes from 'prop-types';
import { Ul, Li } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <Ul>
      <Li>
        <p>Good:{good}</p>
      </Li>
      <Li>
        <p>Neutral: {neutral}</p>
      </Li>
      <Li>
        <p>Bad: {bad}</p>
      </Li>
      <Li>
        <p>Total:{total}</p>
      </Li>
      <Li>
        <p>PositivePercentage:{positivePercentage}%</p>
      </Li>
    </Ul>
  </>
);
Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
