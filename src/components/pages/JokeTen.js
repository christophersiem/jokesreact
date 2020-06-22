import React, {useEffect, useState} from "react";
import JokeCard from "../Card/JokeCard";
import Grid from "@material-ui/core/Grid";

export default function JokeTen() {

    const [jokes, setJokes] = useState();

    useEffect(() => {
            fetch("https://official-joke-api.appspot.com/random_ten").then(response => response.json()).then(data => setJokes(data));

        }, []
    );


    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
            {jokes && jokes.map((joke) => (
                <JokeCard joke ={joke}></JokeCard>
            ))}
            </Grid>
        </>
    );
}



