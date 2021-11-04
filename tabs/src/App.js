import './App.css';
import {useState} from 'react';
import Tabs from './components/tabs';


function App(){
  
  const [tabs, setTabs] =  useState([
    {label: 'Tab 1', content: "Tab 1 Content"},
    {label: 'Tab 2', content: 'Tab 2 Content'},
    {label: 'Tab 3', content: 'Tab 3 Content'}
    ]);
    

  
    
  return(
    <div className='App'>
    <Tabs tabs={tabs}/>
  </div>
  );
};

export default App;