import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, About, Contact, Foo } from "./Pages/Homepage";


const Routes = () => {
    return (
		<div>		
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/foo" component={Foo} />
		
            </Switch>
        </div>
    );
};

export default Routes;