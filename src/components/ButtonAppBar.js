import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


export default function ButtonAppBar() {
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: 'grey' }}>
                <Toolbar>
                    <Button component={Link} to="/" color="inherit" size="large">Christos Ioannou</Button>
                    <Button component={Link} to="/projects" style={{ marginLeft: "auto" }} color="inherit" size="large">Projects</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
