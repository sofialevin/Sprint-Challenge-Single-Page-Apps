import React from "react";
import { Route } from 'react-router-dom';
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodesList from "./EpisodesList"

export default function AppRouter() {
    return (
    <div>
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character" component={CharacterList}/>
        <Route path="/location" component={LocationsList}/>
        <Route path="/episode" component={EpisodesList}/>
    </div>
    )
}