import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage, CartPage} from "../pages";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route path='/cart'>
                    <CartPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
