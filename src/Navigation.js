import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub';
import makeStyles from './classes'



const Navigation = () => {
    const classes = makeStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Sorting Visualization
                    </Typography>
                   
                    <IconButton 
                        color="inherit"    
                        aria-label="delete"
                        href="https://github.com/willproj/sorting-visualization-web"
                    >   
                        <GitHubIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation;