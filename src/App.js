import React, { Component } from "react";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (event) => {
    const value = event.target.textContent.toLowerCase();
    const updateState = (key) => {
      return this.setState((prevState) => {
        const newState = {};

        newState[key] = prevState[key] + 1;

        return newState;
      });
    };
    updateState(value);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();

      return Math.round((good / total) * 100);
    };

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.handleIncrement} />
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
        {countTotalFeedback() > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;