import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import './Card.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 0,
        // paddingTop: '56.25%', // 16:9
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined" >
            <CardContent >
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2" >
                    Graduate Software Engineer
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Writes software using a programming language
                </Typography>
                <CardMedia
                    className={classes.media}
                    image="../thg.png"
                    title="Paella dish"
                />
                <Typography variant="body2" component="p">
                    September 2020 - Present
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
