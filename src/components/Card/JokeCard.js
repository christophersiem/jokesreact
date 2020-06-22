import React from "react";
import "./JokeCard.css"


import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    media: {
        height: 180,
    },
});


export default function JokeCard(props) {
    const classes = useStyles();

    return (
        <article className={"JokeCard"}>
            <Card>
                <CardMedia
                    className={classes.media}

                    image="https://picsum.photos/100"

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Funny Joke
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.joke.setup}
                    </Typography>
                    <div className={"height"}></div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.joke.punchline}
                    </Typography>
                </CardContent>
            </Card>
        </article>
);
}