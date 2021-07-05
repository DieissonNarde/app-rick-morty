import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;