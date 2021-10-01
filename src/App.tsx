import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { TheHeader } from './components/TheHeader';
import ROUTES from './constants/routes';
import { Calendar } from './pages/Calendar';
import { Home } from './pages/Home';
import { Todos } from './pages/Todos';

function App() {
  return (
    <div className='App'>
      <Router>
        <TheHeader />
        <Switch>
          <Route
            exact
            path={ROUTES.HOME}
            component={Home}
          />
          <Route
            exact
            path={ROUTES.TODO_LIST}
            component={Todos}
          />
          <Route
            exact
            path={ROUTES.CALENDAR}
            component={Calendar}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
