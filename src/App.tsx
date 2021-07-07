import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { FavoritesContextProvider } from './contexts/FavoritesContext';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <FavoritesContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </FavoritesContextProvider>
        
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;