import { Component } from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import { StyledContainer } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const name = event.target.name;

    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  render() {
    let total = this.countTotalFeedback();
    const options = Object.keys(this.state);

    return (
      <StyledContainer>
        <Section title="Please leave feedback">
          {options.map(option => (
            <FeedbackOptions
              key={option}
              options={option}
              onLeaveFeedback={this.handleFeedback}
            />
          ))}
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percent={total ? this.countPositiveFeedbackPercentage() : 0}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StyledContainer>
    );
  }
}
