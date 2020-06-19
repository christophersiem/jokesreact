import React from "react";
import {Grid} from "@material-ui/core";

export default function Header() {
    return (

        <header>

            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid
                    item xs={6}>
                    Bild
                </Grid>

                <Grid
                    item xs={8}>
                    Headertext
                </Grid>
            </Grid>


        </header>
    );
}