import React from "react";
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import SimpleCardTwo from "./SimpleCardTwo";

export default function Home() {
    return (
        <>
            <Grid item xs={3} >
            </Grid >
            <Grid item xs={6} >
                <SimpleCard />
            </Grid>
            <Grid item xs={3}>
            </Grid>


            {/* Second Card */}
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <SimpleCardTwo />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </>
    );
}