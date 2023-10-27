import { useState } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import { StyledContainer } from './App.styled';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const name = event.target.name;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  let total = countTotalFeedback();

  const options = ['good', 'neutral', 'bad'];

  return (
    <StyledContainer>
      <Section title="Please leave feedback">
        {options.map(option => (
          <FeedbackOptions
            key={option}
            options={option}
            onLeaveFeedback={handleFeedback}
          />
        ))}
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percent={total ? countPositiveFeedbackPercentage() : 0}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StyledContainer>
  );
};
