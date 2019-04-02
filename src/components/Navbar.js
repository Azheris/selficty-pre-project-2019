import React from 'react';
import {AppBar, Toolbar, Typography, MuiThemeProvider} from '@material-ui/core/'
import theme from './Theme'

const NavBar = () => {
    return (
        <MuiThemeProvider theme={theme}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    SELFCITY Pre-Project
                </Typography>
            </Toolbar>
        </AppBar>
        </MuiThemeProvider>
    );
}

export default NavBar;