import { Route, Switch } from 'react-router-dom';

import News from './News';
import Contact from './Contact';
import AboutBanner from './About_Banner';
import HomeBody from './Home_Banner';
import IndexBanner from './Index_Banner';
import Error from '../Error';
const Banner = () => {
    return (
        <div className='banner'>
            <Switch>
                <Route exact path='/'>
                        <HomeBody/>
                    </Route>
                    <Route exact path='/about'>
                        <AboutBanner/>
                    </Route>
                <Route path='/about/news'>
                        <News/>
                </Route>
                <Route path='/about/contact'> 
                    <Contact/>
                </Route>
                <Route path='/index'> 
                    <IndexBanner/>
                </Route>
                <Route path='*'> 
                    <Error/>
                </Route>
            </Switch>
        </div>
    );
}

export default Banner