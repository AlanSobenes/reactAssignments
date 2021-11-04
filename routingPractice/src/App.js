import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
import Color from './components/Colors'




function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/home'>
          <Home/>
        </Route>

        <Route exact path='/:input'>
          <Input/>
        </Route>

        <Route exact path='/:input/:background/:color'>
          <Color/>
        </Route>

      </Switch>
    </BrowserRouter>
  )
};

export default App;
