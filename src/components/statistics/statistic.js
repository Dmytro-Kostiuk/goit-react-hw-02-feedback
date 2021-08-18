import React from 'react';
import Styles from './statistic.module.css';
class Statistic extends React.Component {
  render() {
    return (
      <>
        <ul className={Styles.list}>
          {this.props.arrayBtn.map(btn => (
            <li className={Styles.item} key={btn}>
              <span>{btn}: </span>
              <span>{this.props[btn.toLowerCase()]}</span>
              <br />
            </li>
          ))}
          <li className={Styles.item}>
            <span>Total : {this.props.total()}</span>
          </li>
          <li className={Styles.item}>
            Positive feedback : {this.props.positivePercentage()}%
          </li>
        </ul>
      </>
    );
  }
}

export default Statistic;
