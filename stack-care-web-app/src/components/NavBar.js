import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%'
  },
};

function SimpleAppBar(props) {
  const { classes, children } = props;
  return (
    <div className={classNames(classes.root, "container-column", "flex-item")}>
        <AppBar className={classes.AppBar} position="static" color="primary">
            <Toolbar>
            <Typography variant="title" color="inherit">
                Stack Care Web App
            </Typography>
            </Toolbar>
        </AppBar>
        <main className={classNames("container-column", "flex-item")}>
            {children}
        </main>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);