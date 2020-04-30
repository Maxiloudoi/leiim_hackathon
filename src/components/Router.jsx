import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import CityInfo from "./Cities/CityInfo";
import Continent from "./continent/Continent";

class RouterPage extends React.Component{
    render() {
    return(
        <Router>
            <div>
            <Link/>
            <Link/>
            <Link/>
            </div>
            <Switch>
                <Route exact path="/" component={WorldPage} />
                <Route path="/:codeContinent" component={Continent}/>
                <Route path="/continent/cities" component={CityInfo} />
            </Switch>
        </Router>
        )
    }
}
export default RouterPage;