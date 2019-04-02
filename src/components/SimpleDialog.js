import React, {Component} from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, Typography} from '@material-ui/core'
import {MuiThemeProvider} from '@material-ui/core/styles'
import theme from './Theme'
import PropTypes from 'prop-types';

class SimpleDialog extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.bikes = props.bikes;
        this.stands = props.stands;
        this.state = { open: false };
    }

    handleClickOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Button variant='raised' color="secondary" onClick={this.handleClickOpen}>+</Button>
            <Dialog fullWidth={true} maxWidth='md' onClose={this.handleClose} open={this.state.open}>
                <DialogTitle>{this.name}</DialogTitle>
                <DialogContent color="primary">
                        <Grid item>
                            <Typography style={{display: 'inline-block'}} variant='h2'>{this.bikes}</Typography>
                            <Typography inline={true} variant='title'>  available bikes at the moment.</Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{display: 'inline-block'}} variant='h2'>{this.stands}</Typography>
                            <Typography inline={true} variant='title'>  available stands at the moment.</Typography>
                        </Grid>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose}/>
                </DialogActions>
            </Dialog>
            </MuiThemeProvider>
        )
    }
};

SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SimpleDialog;