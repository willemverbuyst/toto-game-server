import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getUserWithStoredToken } from './store/user/actions';
import IceBlueGold from './ui/theme';
import Header from './Components/Header';
import Toast from './Components/Toast';
import UserDisplay from './Components/UserDisplay/UserDisplay';
import SignUp from './Pages/Admin/SignUp';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import PageNotFound from './Pages/PageNotFound';
import ListOfPlayers from './Pages/Players/ListOfPlayers';
import PublicProfilePlayer from './Pages/Players/PublicProfilePlayer';
import Predictions from './Pages/Predictions';
import Profile from './Pages/Profile';
import Rules from './Pages/Rules';
import Fixture from './Pages/Scores/Fixture';
import Round from './Pages/Scores/Round';
import ScoresUser from './Pages/Scores/ScoresUser';
import TotalToto from './Pages/Scores/TotalToto';
import TotoRound from './Pages/Scores/TotoRound';
import { 
  createStyles, 
  makeStyles, 
  MuiThemeProvider, 
  Theme 
} from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      marginTop: theme.spacing(2)
    },
    content: {
      borderRadius: '4px',
      padding: '1rem 2rem',
      minHeight: '85vh',
      backgroundColor: '#f1f1f1',
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    user: {
      marginRight: theme.spacing(5),
    }
  })
);

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken);
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={IceBlueGold}>
      <Toast/>
      <Header/> 
      <Grid
        container
        className={classes.contentWrapper}
        >
        <Grid item md={11} xs={12}>
          <Box className={classes.content}>
            <Switch>
              <Redirect exact path="/" to="/login" />
              <Route exact path="/admin/signup" component={SignUp} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/mijnscores" component={ScoresUser} />
              <Route exact path="/page-not-found" component={PageNotFound} />
              <Route exact path="/profiel" component={Profile} />
              <Route exact path="/regels" component={Rules} />
              <Route exact path="/scores/ronde/:id" component={Round} />
              <Route exact path="/scores/totaaltoto" component={TotalToto} />
              <Route exact path="/scores/totoronde/:id" component={TotoRound} />
              <Route exact path="/scores/wedstrijd/:id" component={Fixture} />
              <Route exact path="/spelers" component={ListOfPlayers} />
              <Route exact path="/spelers/:id" component={PublicProfilePlayer} />
              <Route exact path="/voorspellingen/:totoronde/:ronde" component={Predictions} />
              <Redirect path="/" to="/page-not-found" />
            </Switch>
          </Box>
        </Grid>
        <Grid item md={1} xs={12}>
          <Box className={classes.user}>
            <UserDisplay/>
          </Box>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
