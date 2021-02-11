import React from "react";
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import SimpleCardTwo from "./SimpleCardTwo";
import { makeStyles } from '@material-ui/core/styles';
import SimpleCardFive from "./SimpleCardFive";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home() {

    const classes = useStyles();

    return (
        <Grid container spacing={10} xs={12}>
            <Grid item xs={12}>
            </Grid>

            <Grid item xs={3} >
            </Grid >
            <Grid item xs={6}>
                <SimpleCard className={classes.paper} />
            </Grid>
            <Grid item xs={3} >
            </Grid>

            {/* Second Card */}
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <SimpleCardFive className={classes.paper} />
            </Grid>
            <Grid item xs={3}>
            </Grid>

            {/* Third Card */}
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
                <SimpleCardTwo className={classes.paper} />
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
}