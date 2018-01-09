import React from 'react';
import ButtonGroup from '../../src/ButtonGroup';

const iconStyle = { backgroundColor: 'black', height: '1em', width: '1em' };
const icon = <span style={iconStyle} className="test"><svg width="1em" height="1em"><rect width="1em" height="1em" /></svg></span>;

const TextButtonGroup = () => (
  <ButtonGroup id="button-group-text">
    <ButtonGroup.Button text="Text1" key="text1" />
    <ButtonGroup.Button text="Text2" key="text2" />
  </ButtonGroup>
);

const IconButtonGroup = () => (
  <ButtonGroup id="button-group-icon">
    <ButtonGroup.Button text="Text1" icon={icon} key="icon1" />
    <ButtonGroup.Button text="Text2" icon={icon} key="icon2" />
  </ButtonGroup>
);

export {
  TextButtonGroup,
  IconButtonGroup,
};
