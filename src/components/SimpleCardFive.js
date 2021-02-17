import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../images/delta_v.png';
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
        width: 516,
        height: 75,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: '1em'
    },
});

export default function SimpleCardFive() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined" >
            <CardContent >
                <Typography variant="h5" component="h2" >
                    Software Developer
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    DeltaV Technologies
                </Typography>
                <Link rel="noopener" href="https://www.deltav-tech.co.uk" target="_blank">
                    <CardMedia src={Logo} component="img" title="Past summer work"
                        className={classes.media} />
                </Link>
                <Typography variant="body2" component="p">
                    June 2019 - September 2019
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}