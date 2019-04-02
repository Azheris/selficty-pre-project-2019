import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, MuiThemeProvider } from '@material-ui/core';
import SimpleDialog from './SimpleDialog';
import theme from './Theme';

const styles = theme => ({
    container: {
      flexGrow: 1,
      padding: 4
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'left',
    },
});

class StationItem extends Component {
    constructor(props) {
        super(props)
        this.name = props.name;
        this.bikes = props.bikes;
        this.stands = props.stands;
    }

    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
            <Grid container className={classes.container} justify='center'>
                <Grid item xs={8} sm={6}>
                    <Paper className={classes.paper}>{this.name}</Paper>
                </Grid>
                <SimpleDialog name={this.name} bikes={this.bikes} stands={this.stands}/>
            </Grid>
            </MuiThemeProvider>
        );
    }
};

StationItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StationItem);