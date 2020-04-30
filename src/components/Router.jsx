import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import CityInfo from "./Cities/CityInfo";
import ContinentPage from "./continent/ContinentPage";
import WorldPageBackGround from "./worldPage/WorldPageBackGround";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={WorldPageBackGround} />
                    <Route path="/:codeContinent/:id" component={CityInfo} />
                    <Route path="/:codeContinent" component={ContinentPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;
