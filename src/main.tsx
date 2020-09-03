import React from 'react';
import {Component} from 'react-subx';
import {Button, Divider, Spin} from 'antd';

import {StoreType} from './store';

type PropsStore = {
  store: StoreType;
};

class App extends Component<PropsStore> {
  render() {
    const store = this.props.store;
    return 'Hello world';
  }
}

export default App;
