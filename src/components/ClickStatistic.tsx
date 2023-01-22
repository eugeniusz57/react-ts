import React from 'react';


interface IState {
  count: number
}

export class ClickStatistic extends React.Component<{}, IState> {
  handleClick () {
    this.setState(({ count }) => {
      return {
        count: ++count,
      };
    });
  }

  render () {
    return (
      <button onClick={this.handleClick}>Click my!</button>
    );
  }
}
