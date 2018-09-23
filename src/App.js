import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ForecastContainer from './containers/ForecastContainer';
import TopBarContainer from './containers/TopBarContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <TopBarContainer/>
          <Route exact path="/" component={ForecastContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
