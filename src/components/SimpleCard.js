import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../images/thg.png';
import './Card.css';
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
        width: 75,
        height: 75,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '1em'
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined" >
            <CardContent >
                <Typography variant="h5" component="h2" >
                    Graduate Software Engineer
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    The Hut Group
                </Typography>
                <Link rel="noopener" href="https://www.thg.com" target="_blank">
                    <CardMedia src={Logo} component="img" title="Current employment"
                        className={classes.media} />
                </Link>
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
