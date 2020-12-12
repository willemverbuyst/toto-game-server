import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Box, 
  Grid, 
  Typography 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main
  }
}));

export default function TotalToto() {
  const classes = useStyles();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (!token) history.push("/login");
  });

  return (
    <Box>
      <Typography variant="h3" className={classes.title}>
        TotalToto
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
      </Grid>
    </Box>
  )
}