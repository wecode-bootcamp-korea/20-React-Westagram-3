import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginSeyongyun from './Pages/seyongyun/Login/Login';
import MainSeyongyun from './Pages/seyongyun/Main/Main';
import LoginGaramsong from './Pages/garamsong/Login/Login';
import MainGaramsong from './Pages/garamsong/Main/Main';
import LoginSunkyungnoh from './Pages/sunkyungnoh/Login/Login';
import MainSunkyungnoh from './Pages/sunkyungnoh/Main/Main';
import LoginSuyeonkim from './Pages/suyeonkim/Login/Login';
import MainSuyeonkim from './Pages/suyeonkim/Main/Main';
import LoginWonkeunchoi from './Pages/wonkeunchoi/Login/Login';
import MainWonkeunchoi from './Pages/wonkeunchoi/Main/Main';
import Test from './Pages/sunkyungnoh/test/Test';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login-suyeonkim" component={LoginSuyeonkim} />
          <Route exact path="/Main-suyeonkim" component={MainSuyeonkim} />
          <Route exact path="/Login-seyongyun" component={LoginSeyongyun} />
          <Route exact path="/Main-seyongyun" component={MainSeyongyun} />
          <Route exact path="/Login-garamsong" component={LoginGaramsong} />
          <Route exact path="/Main-garamsong" component={MainGaramsong} />
          <Route exact path="/Login-sunkyungnoh" component={LoginSunkyungnoh} />
          <Route exact path="/Main-sunkyungnoh" component={MainSunkyungnoh} />
          <Route exact path="/Login-wonkeunchoi" component={LoginWonkeunchoi} />
          <Route exact path="/Main-wonkeunchoi" component={MainWonkeunchoi} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
