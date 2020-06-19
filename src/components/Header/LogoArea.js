import {Grid} from "@material-ui/core";
import React from "react";

export default function LogoArea() {
    return (<Grid container direction="row" justify="space-around" alignItems="center">

        <Grid item xs={4}>
            <img src="https://i.pinimg.com/originals/25/55/54/25555429910d5fc2035e56649bd398a8.png" alt="laughing smiley" width="60%" className={"logoImage"}/>
        </Grid>

        <Grid item xs={8}>
            <h1>Jokes Generator</h1>
        </Grid>
    </Grid>)
}
