import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomeBody from './HomeBody';
import ContactBody from './ContactBody';
import NewsBody from './NewsBody';
import AboutBody from './AboutBody';
import Index from './Index';
import Index1 from './Index1';
import Index2 from './Index2';
import Index3 from './Index3';
import Error from '../Error';

const Body = () => {
    return(
        <div className='body'>
        <Switch>
            <Route exact path='/'>
                    <HomeBody/>
                </Route>
                <Route exact path='/about'>
                    <AboutBody/>
                </Route>
            <Route path='/about/news'>
                    <NewsBody/>
            </Route>
            <Route path='/about/contact'> 
                <ContactBody/>
            </Route>
            <Route exact path='/index'> 
                <Index/>
            </Route>
            <Route  path='/index/1'> 
                <Index1/>
            </Route>
            <Route  path='/index/2'> 
                <Index2/>
            </Route>
            <Route  path='/index/3'> 
                <Index3/>
            </Route>
            <Route path='*'> 
                    <Error/>
            </Route>
        </Switch>
    </div>
    )
}

export default Body