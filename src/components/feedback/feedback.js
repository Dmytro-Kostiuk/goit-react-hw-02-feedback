import React from 'react';
import Styles from './feedback.module.css';
import Statistic from '../statistics/statistic';
import FeedbackOptions from '../feedbackOptions/feedbackOption';
import Notification from '../notification/notification';
import Section from '../section/section';
const arrBtn = ['Good', 'Neutral', 'Bad'];
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const buff = event.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [buff]: prevState[buff] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (total, stat) => total + this.state[stat],
      0,
    );
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return ((this.state.good / total) * 100).toFixed(2);
  };
  render() {
    const total = this.countTotalFeedback();
    return (
      <div className={Styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={arrBtn}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistic
              arrayBtn={arrBtn}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
