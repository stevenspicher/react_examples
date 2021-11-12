import React from 'react';

import './App.css';
import Main from './components/Main';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Body from './components/Body/Body';

import { useHistory } from "react-router-dom";




const App = () => {
  const history = useHistory();
 
  return (
    <>
    <Banner/>
    <div className="menu">
            {/* <button onClick={
              () => {history.goBack();
            }}>
              Go back
            </button> */}
      <Header/> 
      <Main /> 
    </div>  
    <Body/>
          
    </>
  );
}

export default App;
