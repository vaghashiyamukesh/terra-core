/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ButtonGroupTests from './ButtonGroupTests';
import { TextButtonGroup, IconButtonGroup } from './ButtonGroupTextAndIcon';
import ButtonGroupSingelSelect from './ButtonGroupSingelSelect';
import ButtonGroupMultiSelect from './ButtonGroupMultiSelect';
import ButtonGroupOnChange from './ButtonGroupOnChange';
import ButtonGroupNotSelectable from './ButtonGroupNotSelectable';
import ButtonGroupDisabledButtons from './ButtonGroupDisabledButtons';

const routes = (
  <div>
    <Route path="/tests/button-group-tests" component={ButtonGroupTests} />
    <Route path="/tests/button-group-tests/text-button-group" component={TextButtonGroup} />
    <Route path="/tests/button-group-tests/icon-button-group" component={IconButtonGroup} />
    <Route path="/tests/button-group-tests/not-selectable-button-group" component={ButtonGroupNotSelectable} />
    <Route path="/tests/button-group-tests/disabled-button-group" component={ButtonGroupDisabledButtons} />
    <Route path="/tests/button-group-tests/single-select-button-group" component={ButtonGroupSingelSelect} />
    <Route path="/tests/button-group-tests/multi-select-button-group" component={ButtonGroupMultiSelect} />
    <Route path="/tests/button-group-tests/on-change-button-group" component={ButtonGroupOnChange} />
  </div>
);

export default routes;
