import Feedback from './Feedback/Feedback';
import React from 'react';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackBtn = {
    good,
    neutral,
    bad,
  };

  function onButtonClick(e) {
    const key = [e.target.outerText];
    if (key === useState[0]) {
      setGood(prev => prev + 1);
      setNeutral(prev => prev + 1);
      setBad(prev => prev + 1);
    }
  }

  function countTotalFeedback() {
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  return (
    <div
      style={{
        height: '100%',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Feedback
        state={feedbackBtn}
        onButtonClick={onButtonClick}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </div>
  );
}
