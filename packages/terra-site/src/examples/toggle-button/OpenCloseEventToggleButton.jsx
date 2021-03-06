import React from 'react';
import ToggleButton from 'terra-toggle-button/lib/ToggleButton';
import styles from '../../site.scss';

class OpenCloseEventToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timesOpened: 0,
      timesClosed: 0,
    };

    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnOpen() {
    this.setState(prevState => ({ timesOpened: prevState.timesOpened + 1 }));
  }

  handleOnClose() {
    this.setState(prevState => ({ timesClosed: prevState.timesClosed + 1 }));
  }

  render() {
    return (
      <div>
        <div id="on-open-event">
          <p>Times Opened: <span className={styles['site-input-display']}>{this.state.timesOpened}</span></p>
          <p>Times Closed: <span className={styles['site-input-display']}>{this.state.timesClosed}</span></p>
        </div>
        <ToggleButton closedButtonText="ToggleButton" onOpen={this.handleOnOpen} onClose={this.handleOnClose}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </ToggleButton>
      </div>
    );
  }
}

export default OpenCloseEventToggleButton;
