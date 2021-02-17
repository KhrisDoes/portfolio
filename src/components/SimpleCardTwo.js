import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../images/soton.png';
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
        width: 230,
        height: 75,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '1em'
    },
});

export default function SimpleCardTwo() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography> */}
                <Typography variant="h5" component="h2">
                    BSc Computer Science
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    University of Southampton
                </Typography>
                <Link rel="noopener" href="https://www.southampton.ac.uk" target="_blank">
                    <CardMedia src={Logo} component="img" title="Higher education"
                        className={classes.media} />
                </Link>
                <Typography variant="body2" component="p">
                    September 2017 - September 2020
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}
