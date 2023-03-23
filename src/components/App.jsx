import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';
import { useState } from 'react';

export function App() {
  const [good, setgood] = useState(0);
  const [neutral, setfneutral] = useState(0);
  const [bad, setbad] = useState(0);

  function onButtonClick(e) {
    const key = [e.target.outerText];
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  }

  function countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
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
        state={this.state}
        onButtonClick={this.onButtonClick}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
      />
    </div>
  );
}
