import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'

import content from './content';
import All from './all';
import SingleCard from './SingleCard';

function App() {

  return (
    
    <div>
      <Switch>
        <Route path={'/all'}>
          <All props={content}/>
        </Route>
        <Route path={`/singlecard/:index`}>
          <SingleCard props={content} />
        </Route>
      </Switch>

    </div>
    
  );
}

export default App;
