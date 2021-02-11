import React from "react";
import Grid from '@material-ui/core/Grid';
import SimpleCardThree from "./SimpleCardThree";
import SimpleCardFour from "./SimpleCardFour";

export default function Projects() {
    return (
        <Grid container xs={12} spacing={10}>
            <Grid item xs={12}> </Grid>
            <Grid item xs={3} >
            </Grid >
            <Grid item xs={6} >
                <SimpleCardThree />
            </Grid>
            <Grid item xs={3}>
            </Grid>

            <Grid item xs={3} >
            </Grid >
            <Grid item xs={6} >
                <SimpleCardFour />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
}