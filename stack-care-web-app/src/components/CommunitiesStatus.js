import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StatusIcon from './StatusIcon'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '10px',
    overflowX: 'auto',
  },
  table: {
   
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, Status1, Status2, Status3) {
  id += 1;
  return { id, name, Status1, Status2, Status3 };
}

const data = [
  createData('New York', 0, 0, 1),
  createData('Los Angeles', 2, 0, 0),
  createData('Chicago', 2, 0, 2),
  createData('Houston', 0, 1, 0),
  createData('Phoenix', 2, 0, 1),
  createData('Philadelphia', 2, 0, 0),
  createData('San Antonia', 1, 0, 2),
  createData('San Diego', 0, 0, 1),
  createData('Dallas', 0, 0, 0),
  createData('San Jose', 0, 1, 0),
  createData('Austin', 0, 0, 0),
];

function CommunitiesStatus(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell padding="dense">Community Name</CustomTableCell>
            <CustomTableCell numeric padding="dense">Status1</CustomTableCell>
            <CustomTableCell numeric padding="dense">Status2</CustomTableCell>
            <CustomTableCell numeric padding="dense">Status3</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow className={classes.row} key={n.id}>
                <CustomTableCell component="th" scope="row" padding="dense">
                  {n.name}
                </CustomTableCell>
                <CustomTableCell numeric padding="dense"><StatusIcon status = {n.Status1} /></CustomTableCell>
                <CustomTableCell numeric padding="dense"><StatusIcon status = {n.Status2} /></CustomTableCell>
                <CustomTableCell numeric padding="dense"><StatusIcon status = {n.Status3} /></CustomTableCell>
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