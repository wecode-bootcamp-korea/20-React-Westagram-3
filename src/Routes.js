import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSeyongyun from './Pages/seyongyunLogin/Login';
import MainSeyongyun from './Pages/seyongyunMain/Main';
import LoginGramsong from './Pages/gramsongLogin/Login';
import MainGramsong from './Pages/gramsongMain/Main';
import LoginSunkyungnoh from './Pages/sunkyungnohLogin/Login';
import MainSunkyungnoh from './Pages/sunkyungnohMain/Main';
import LoginSuyeonkim from './Pages/suyeonkimLogin/Login';
import MainSuyeonkim from './Pages/suyeonkimMain/Main';
import LoginWonkeunchoi from './Pages/wonkeunchoiLogin/Login';
import MainWonkeunchoi from './Pages/wonkeunchoiMain/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginSuyeonkim} />
          <Route exact path="/Main-suyeonkim" component={MainSuyeonkim} />
          <Route exact path="/Login-seyongyun" component={LoginSeyongyun} />
          <Route exact path="/Main-seyongyun" component={MainSeyongyun} />
          <Route exact path="/Login-gramsong" component={LoginGramsong} />
          <Route exact path="/Main-gramsong" component={MainGramsong} />
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