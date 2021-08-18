import React from 'react';
import Styles from './feedbackOptions.module.css';

const feedbackOption = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button
      type="button"
      key={btn}
      onClick={event => {
        onLeaveFeedback(event);
      }}
      className={Styles.button}
    >
      {btn}
    </button>
  ));
};

export default feedbackOption;
