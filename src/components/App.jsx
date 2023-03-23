import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions ';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function getGoodFeetBack() {
    setGood(good + 1);
  }
  function getNeutralFeetBack() {
    setNeutral(neutral + 1);
  }

  function getBadFeetBack() {
    setBad(bad + 1);
  }

  function countTotalFeedback() {
    let AllFaadback = good + neutral + bad;
    return AllFaadback;
  }

  function countPositiveFeedbackPercentage() {
    let count = 0;
    count = (good / (good + bad + neutral)) * 100;
    return Math.round(count) || 0;
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          getGoodFeetBack={getGoodFeetBack}
          getNeutralFeetBack={getNeutralFeetBack}
          getBadFeetBack={getBadFeetBack}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
