/*
  Name   : DevTools
  Author : zhangbaitong@163.com
  Date   : 2016-08-31
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-w'
               defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
);