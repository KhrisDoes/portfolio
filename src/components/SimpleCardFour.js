import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Vid from '../videos/dodge_the_spam.mp4';
import Link from '@material-ui/core/Link';


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
        width: 250,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        // height: 0,
        // paddingTop: '1em', // 16:9
        paddingBottom: '1em'
    },
});

export default function SimpleCardTwo() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
                    DodgeTheSpam
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    <Link rel="noopener" href="https://github.com/KhrisDoes/Dodge-The-Spam" target="_blank">
                        GitHub Repository
                 </Link>
                </Typography>
                <CardMedia src={Vid} component="video" title="Some title" autoPlay controls loop
                    className={classes.media}
                />
                <Typography variant="body2" component="p">
                    - Graphical User Interface using Python Pygame<br />
                    - 2D game intended to be tested by a Reinforcement Learning algorithm
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
