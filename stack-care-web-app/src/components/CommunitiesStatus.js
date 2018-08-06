import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StatusIcon from './StatusIcon';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },/*
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },*/
});

let id = 0;
function createData(name, Hub, Device, Battery) {
  id += 1;
  return { id, name, Hub, Device, Battery };
}

const data = [
  createData('New York', 0, 0, 1),
  createData('Los Angeles', 2, 0, 0),
  createData('Chicago', 2, 0, 2),
  createData('Houston', 0, 1, 0),
  createData('Phoenix', 2, 0, 1),
  createData('Philadelphia', 2, 0, 0),
  createData('Chicago', 2, 0, 2),
];

function CommunitiesStatus(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
        <Typography variant="headline" component="h3">
          Community Status
        </Typography>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell padding="dense"></TableCell>
                <TableCell padding="dense"><Typography variant="subheading">Hub</Typography></TableCell>
                <TableCell padding="dense"><Typography variant="subheading">Device</Typography></TableCell>
                <TableCell padding="dense"><Typography variant="subheading">Battery</Typography></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map(n => {
                return (
                <TableRow className={classes.row} key={n.id}>
                    <TableCell component="th" scope="row" padding="dense">
                        <Typography variant="body1">
                            {n.name}
                        </Typography>    
                    </TableCell>
                    <TableCell padding="dense"><StatusIcon status = {n.Hub} /></TableCell>
                    <TableCell padding="dense"><StatusIcon status = {n.Device} /></TableCell>
                    <TableCell padding="dense"><StatusIcon status = {n.Battery} /></TableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>  
    </Paper>
  );
}

CommunitiesStatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommunitiesStatus);