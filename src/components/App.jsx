import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification ';
import { Wrapper } from './Section/Section.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = ['good', 'neutral', 'bad'];

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  function countPositiveFeedbackPercentage() {
    const totalFeedback = countTotalFeedback();

    if (totalFeedback < 1) {
      return 0;
    }

    return Math.round((good * 100) / totalFeedback);
  }

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={totalFeedback}
          onLeaveFeedback={handleLeaveFeedback}
        ></FeedbackOptions>
        <h2>Statistics</h2>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};
