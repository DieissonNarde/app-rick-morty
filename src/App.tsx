import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;