import AppScreen from './pages/AppScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <>
    <Router>
      <Switch>
        <Route path='/despesas/:mes'>
          <AppScreen />
        </Route>
        <Redirect to={{ pathname: 'despesas/2020-06'}} />
      </Switch>
    </Router>
    </>
  );
}
