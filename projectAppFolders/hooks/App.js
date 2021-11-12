import './App.css';
import {Stack} from 'react-bootstrap'
import LessText from './components/Trim';
import StepTracker from './components/StepTracker';
import ListOfThings from './components/ListOfThings';
import LoginForm from './components/LoginForm';
import CountUseEffect from './components/CountUseEffect';
import StoreUser from './components/UserStorage';


  

function App() {
  return (
    <div className="App">
      <Stack gap={3}>
        <LessText maxLength={16}/>
         <StepTracker /> 
        <ListOfThings />
         <LoginForm />
        <CountUseEffect />
       <StoreUser /> 
      </Stack>
    </div>
  );
}

export default App;
