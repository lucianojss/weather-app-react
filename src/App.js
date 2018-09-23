import React, { Component } from 'react';
import ForecastContainer from './containers/ForecastContainer';
import TopBarContainer from './containers/TopBarContainer';

class App extends Component {

  render() {
    return (
        <div>
          <TopBarContainer/>
          <ForecastContainer/>
        </div>
    );
  }
}

export default App;
