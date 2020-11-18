import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../store/user/selectors';
import { fetchAllFixtures } from '../../store/voorspellingen/actions';
import { selectFixtures } from '../../store/voorspellingen/selectors';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MatchCard from '../../Components/PlayerCard/MatchCard';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main
  },
  subTitle: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main
  },
  pagination: {
    padding: theme.spacing(2)
  }
}));

export default function Voorspellingen() {
  const classes = useStyles();
  const token = useSelector(selectToken);
  const history = useHistory();
  const dispatch = useDispatch();
  const fixtures = useSelector(selectFixtures)
  const [gameNumber, setGameNumber] = React.useState(1);
  const [roundNumber, setRoundNumber] = React.useState(1);
  

  useEffect(() => {
    if (!token) history.push("/login");
  });

  useEffect(() => {
    dispatch(fetchAllFixtures());
  }, [dispatch]);

  const handleChangeGames = (_event: React.ChangeEvent<unknown>, value: number) => {
    setGameNumber(value);
  };

  const handleChangeRounds = (_event: React.ChangeEvent<unknown>, value: number) => {
    setRoundNumber(value);
  };

  

  return (
    token ? (  
      <Grid container>
      <Typography variant="h2" className={classes.title}>
        Voorspellingen
      </Typography>

      { fixtures ?
        <>
          <Grid item xs={12} container justify="center">
            <Typography variant="h5" className={classes.subTitle}>
              Game {gameNumber} - Round {roundNumber}
            </Typography>
          </Grid>

          <Grid item xs={12} container justify="center">
          {fixtures ? fixtures[gameNumber -1][roundNumber -1].map((wedstrijd, i) => <Grid item key={i} lg={4} md={6} xs={12}><MatchCard wedstrijdMetVoorspellingen={wedstrijd}/></Grid>) : null }
        </Grid>

          <Grid item xs={12} container>
            <Grid item xs={12} container justify="center" className={classes.pagination}>
              <Typography variant="h6">
                Rounds
              </Typography>
              <Pagination count={fixtures[gameNumber -1].length} color="primary" onChange={handleChangeRounds} />
            </Grid>
          </Grid>
            
          <Grid item xs={12} container>
            <Grid item xs={12} container justify="center" className={classes.pagination}>
              <Typography variant="h6">
                Games
              </Typography>
              <Pagination count={fixtures.length} color="secondary" onChange={handleChangeGames} />
            </Grid>
          </Grid>
        </>
      : null }
      </Grid>
    ) : ( null )
  )
}

