import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import * as Components from './index.js';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.Styled = { ServerStyleSheet };

global.RootComponent = Components;
