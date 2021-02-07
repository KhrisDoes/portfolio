import React from "react";
import Grid from '@material-ui/core/Grid';
import SimpleCardThree from "./SimpleCardThree";

export default function Projects() {
    return (
        <>
            <Grid item xs={3} >
            </Grid >
            <Grid item xs={6} >
                <SimpleCardThree />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </>
    );
}