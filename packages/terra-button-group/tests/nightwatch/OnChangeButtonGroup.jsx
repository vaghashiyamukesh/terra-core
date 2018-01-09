import React from 'react';

import ButtonGroup from '../../src/ButtonGroup';

class buttonGroupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, key) {
    this.setState({ key });
  }

  render() {
    return (
      <div>
        <h3>Selected Button: <span id="selected-key">{this.state.key}</span></h3>
        <ButtonGroup
          id="button-group-onchange"
          isSelectable
          selectType={ButtonGroup.Opts.selectTypes['MULTI-SELECT']}
          onChange={this.handleSelection}
        >
          <ButtonGroup.Button text="Button 1" key="button1" />
          <ButtonGroup.Button text="Button 2" key="button2" />
          <ButtonGroup.Button text="Button 3" key="button3" />
          <ButtonGroup.Button text="Button 4" key="button4" />
        </ButtonGroup>
      </div>
    );
  }
}
export default buttonGroupExample;
