import React, {useEffect, useState} from "react";
import JokeCard from "../Card/JokeCard";

export default function JokeRandom(props) {

    const [joke, setJoke] = useState();

    useEffect(() => {
            fetch("https://official-joke-api.appspot.com/random_joke").then(response => response.json()).then(data => setJoke(data));

        }, []
    );
    return (
        <>
            {joke && <JokeCard joke={joke}></JokeCard>}
        </>
    );


}