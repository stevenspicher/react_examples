import { Route, Switch, useHistory } from 'react-router-dom';


import Home from './Header/Home';
import About from './Header/About';
import Index from './Header/Index';
import Error from './Error';


const Main = () =>  {
    const history = useHistory();
    console.log(history)
    return (
        <main>
             <>
            <button
                onClick={() => history.push("/about")}
            >
                About
            </button>
            <button
                onClick={() => history.push("/index")}
            >
                index
            </button>
            <p>Welcome Home</p>
        </>
            <Switch>
                <Route exact path='/'> 
                    <Home/>
                </Route>
                <Route path='/about'> 
                    <About />
                </Route>
                <Route path='/index'> 
                    <Index/>
                </Route>
                <Route path='*'> 
                    <Error/>
                </Route>
            </Switch>

           
             
        </main>

    );
}

export default Main