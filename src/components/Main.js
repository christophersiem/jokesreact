import React, {useState} from "react";
import "./Main.css"

import {Route} from "react-router";
import {Switch} from "react-router";
import JokeRandom from "./pages/JokeRandom";
import JokeTen from "./pages/JokeTen";

export default function Main() {







    return (
        <main className="flex-grow">
            <Switch>
                <Route path={"/random"}>
                    <h2>random Joke</h2>
                    <JokeRandom/>
                </Route>

                <Route exact path={"/randomten"}>
                    <h2>10 random Jokes</h2>
                    <JokeTen/>
                </Route>
                <Route path={"/"}>
                    <p>Wanna laugh?</p>
                </Route>
            </Switch>
        </main>
    );
}