import { useState } from "react";
import PropTypes from "prop-types";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

//  HOOK

const App = function () {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const handleIncrement = (event) => {
    const value = event.target.textContent.toLowerCase();

    switch (value) {
      case "good":
        setGoodReview(goodReview + 1);
        break;
      case "neutral":
        setNeutralReview(neutralReview + 1);
        break;
      case "bad":
        setBadReview(badReview + 1);
        break;
    }
  };

  const countTotalFeedback = () => goodReview + neutralReview + badReview;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return Math.round((goodReview / total) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={handleIncrement} />
      {countTotalFeedback() === 0 && (
        <Notification message="No feedback given" />
      )}
      {countTotalFeedback() > 0 && (
        <Statistics
          good={goodReview}
          neutral={neutralReview}
          bad={badReview}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};

App.defaultProps = {
  goodReview: 0,
  neutralReview: 0,
  badReview: 0,
};

App.propTypes = {
  goodReview: PropTypes.number.isRequired,
  neutralReview: PropTypes.number.isRequired,
  badReview: PropTypes.number.isRequired,
};

export default App;

//  CLASS

// class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   static propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   handleIncrement = (event) => {
//     const value = event.target.textContent.toLowerCase();

//     this.setState((prevState) => {
//       return { [value]: prevState[value] + 1 };
//     });
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     const countTotalFeedback = () => good + neutral + bad;
//     const countPositiveFeedbackPercentage = () => {
//       const total = countTotalFeedback();

//       return Math.round((good / total) * 100);
//     };

//     return (
//       <Section title="Please leave feedback">
//         <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
//         {countTotalFeedback() === 0 && (
//           <Notification message="No feedback given" />
//         )}
//         {countTotalFeedback() > 0 && (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback()}
//             positivePercentage={countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     );
//   }
// }

// export default App;
