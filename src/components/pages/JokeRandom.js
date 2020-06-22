import React, {useEffect, useState} from "react";
import JokeCard from "../Card/JokeCard";
import Grid from "@material-ui/core/Grid";

export default function JokeRandom(props) {

    const [joke, setJoke] = useState();

    useEffect(() => {
            fetch("https://official-joke-api.appspot.com/random_joke").then(response => response.json()).then(data => setJoke(data));

        }, []
    );
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
        <>
            {joke && <JokeCard joke={joke}></JokeCard>}
        </>
        </Grid>
    );


}