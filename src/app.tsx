import * as React from 'react';
import './app.css';
import {View} from 'remax/wechat';


const App: React.FC = props => (
  <View>
    {props.children}
  </View>
)

export default App;
