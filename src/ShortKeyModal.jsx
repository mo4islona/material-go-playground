import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  table: {
    '& td': {
      fontSize: '0.8rem',
    },
    '& tr td:first-child, & tr th:first-child': {
      paddingLeft: 0,
    },
    '& tr:last-child td': {
      borderBottom: 0,
    },
  },
}));

export default function ShortKeyModal({ open, handleToggle }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleToggle}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle id="scroll-dialog-title" style={{ paddingBottom: 0 }}>Key maps</DialogTitle>
      <DialogContent component="div">
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Command</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Cmd+Enter</TableCell>
              <TableCell>Run</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shift+Enter</TableCell>
              <TableCell>Format</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cmd+/</TableCell>
              <TableCell>Comment line</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shift+Ctrl+K</TableCell>
              <TableCell>Delete line</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shift+Cmd+D</TableCell>
              <TableCell>Duplicate line</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cmd+Ctrl+Up</TableCell>
              <TableCell>Swap Line Up</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cmd+Ctrl+Down</TableCell>
              <TableCell>Swap Line Down</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cmd+Left</TableCell>
              <TableCell>Go Line Start Smart</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cmd+Right</TableCell>
              <TableCell>Go Line End Smart</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>

  );
}


ShortKeyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
};
