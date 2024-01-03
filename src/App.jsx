import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import TwoStepVerification from './pages/TwoStepVerification';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgetPassword />
        </Route>
        <Route path="/two-step-verification" exact>
          <TwoStepVerification />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
