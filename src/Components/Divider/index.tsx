import { Divider, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
    marginBottom: theme.spacing(6),
  },
}));

const DividerComponent = (): ReactElement => {
  const classes = useStyles();

  return (
    <Grid className={classes.divider}>
      <Divider />
    </Grid>
  );
};

export default DividerComponent;