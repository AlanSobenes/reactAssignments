import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form'
import People from './components/People'
import Planets from './components/Planets'




function App() {
  return (
    <div className='App'>
      <BrowserRouter>

        <h1>Luke Api-Walker⚔️</h1>
        <Form />
        <hr/>

        <Switch>

          <Route exact path='/people/:input'>
            <People />
          </Route>

          <Route exact path='/planets/:input'>
            <Planets />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;

