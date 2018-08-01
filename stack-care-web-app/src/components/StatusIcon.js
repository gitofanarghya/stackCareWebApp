import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

const styles = {
  avatar: {
    margin: 0,
  },
  orangeAvatar: {
    color: '#fff',
    backgroundColor: orange[500],
  },
  redAvatar: {
    color: '#fff',
    backgroundColor: red[500],
  },
  greenAvatar: {
    color: '#fff',
    backgroundColor: green[500],
  },
};

function IconAvatars(props) {
  const { classes, status } = props;
  return (
    <Avatar className={status === 0 ? classes.greenAvatar : status === 1 ? classes.orangeAvatar : classes.redAvatar }>
        {status === 0 ? <DoneIcon /> : status === 1 ? <WarningIcon /> : <ErrorIcon /> }
    </Avatar>
  );
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);