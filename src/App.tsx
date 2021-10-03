import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import TheHeader from './components/TheHeader';
import ROUTES from './constants/routes';
import Board from './pages/Board';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Todos from './pages/Todos';

function App() {
  return (
    <div className='App'>
      <Router>
        <TheHeader />
        <MainContainer>
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
              path={ROUTES.BOARD}
              component={Board}
            />
            <Route
              exact
              path={ROUTES.CALENDAR}
              component={Calendar}
            />
          </Switch>
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
