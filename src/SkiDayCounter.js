import React, { Component } from "react";

const getPercent = decimal => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

export default function SkiDayCounterF({ total, powder, backcountry, goal }) {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
}

export class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + "%";
  };

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total / goal);
  };

  render() {
    const { total, powder, backcountry, goal } = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    );
  }
}
