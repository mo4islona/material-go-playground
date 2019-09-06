import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  about: {
    '& a': {
      color: theme.palette.secondary.light,
    },

    '& *': {
      fontSize: '0.9rem',
      fontFamily: theme.typography.fontFamily,
    },

    '& p, & li': {
      lineHeight: 1.2,
      marginBottom: theme.spacing(2),
    },
  },
}));


export default function AboutModal({ open, handleToggle }) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleToggle}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
    >
      <DialogTitle id="scroll-dialog-title">About the Playground</DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.about}>
          <Typography variant="body1">
            The Go Playground is a web service that runs on
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://golang.org/">golang.org</a>
            `&lsquo;s servers.
            <br />
            The service receives a Go program,
            {' '}
            <a rel="noopener noreferrer" href="https://golang.org/cmd/vet/">vets</a>
, compiles, links, and
            <br />
            runs the program inside a sandbox, then returns the output.
          </Typography>

          <Typography variant="body1">
            If the program contains
            {' '}
            <a target="_blank" rel="noopener noreferrer" href="https://golang.org/pkg/testing">tests or examples</a>
            {' '}
and no main function,
            the
            service runs the tests.
            <br />
            Benchmarks will likely not be supported since the program runs
            in a sandboxed environment with limited
            resources.
          </Typography>

          <Typography variant="body1">
            There are limitations to the programs that can be run in the playground:
          </Typography>

          <ul>
            <li>
              The playground can use most of the standard library, with some exceptions.
              <br />
              The only communication a playground program has to the outside world is by
              writing to standard output and
              standard error.
            </li>

            <li>
              In the playground the time begins at 2009-11-10 23:00:00 UTC (determining the
              significance of this date is an
              exercise for the reader).
              This makes it easier to cache programs by giving them deterministic output.
            </li>

            <li>
              There are also limits on execution time and on CPU and memory usage.
            </li>
          </ul>

          <Typography variant="body1">
            The article "
            <a rel="noopener noreferrer" href="https://blog.golang.org/playground" target="_blank">
Inside
            the Go Playground
            </a>
" describes how the playground is implemented.
            The source code is available at
            {' '}
            <a
              href="https://go.googlesource.com/playground"
              target="_blank"
              rel="noopener noreferrer"
            >
https://go.googlesource.com/playground
            </a>
.
          </Typography>

          <Typography variant="body1">
            The playground uses the latest stable release of Go.
            <br />
            The current version is
            {' '}
            <a href="/p/Ztyu2FJaajl">go1.12.8</a>
.
          </Typography>

          <Typography variant="body1">
            The playground service is used by more than just the official Go project (
            <a
              href="https://gobyexample.com/"
              rel="noopener noreferrer"
            >
Go by Example
            </a>
            {' '}
is one other instance)
            and we are happy for you to use it on your own site.
            All we ask is that you
            {' '}
            <a href="mailto:golang-dev@googlegroups.com">
contact us first (note this is a public
            mailing list)
            </a>
,
            use a unique user agent in your requests (so we can identify you),
            and that your service is of benefit to the Go community.
          </Typography>

          <Typography variant="body1">
            Any requests for content removal should be directed to
            {' '}
            <a
              href="mailto:security@golang.org"
            >
security@golang.org
            </a>
.
            Please include the URL and the reason for the request.
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>

  );
}


AboutModal.propTypes = {
  open: PropTypes.bool,
  handleToggle: PropTypes.func,
};
