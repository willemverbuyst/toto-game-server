import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import IceBlueGold from './ui/theme';
import Header from './Components/Header';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import PageNotFound from './Pages/PageNotFound';
import Profiel from './Pages/Profiel';
import Regels from './Pages/Regels';
import Scores from './Pages/Scores';
import SignUp from './Pages/Admin/SignUp';
import Spelers from './Pages/Admin/Spelers';
import Voorspellingen from './Pages/Voorspellingen';
import Toast from './Components/Toast';
import { Container } from '@material-ui/core';
import Progress from './Components/Progress';
import { selectAppLoading } from './store/appState/selectors';
import { getUserWithStoredToken } from './store/user/actions';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    borderContainer: {
      borderRadius: '4px',
      padding: '4rem',
      minHeight: '80vh',
      marginTop: '2rem'
    },
    spinnerContainer: {
      borderRadius: '4px',
      padding: '4rem',
      minHeight: '80vh',
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }

  })
);

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading)

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={IceBlueGold}>
      <Toast/>
      <Header/>
      {isLoading ?  (
        <Container maxWidth="md" className={classes.spinnerContainer}>
          <Progress/>
        </Container> 
        ) : null }
        <Container maxWidth="md" className={classes.borderContainer}>
          <Switch>
            <Route exact path="/admin/signup" component={SignUp} />
            <Route exact path="/admin/spelers" component={Spelers} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/profiel" component={Profiel} />
            <Route exact path="/regels" component={Regels} />
            <Route exact path="/scores" component={Scores} />
            <Route exact path="/voorspellingen" component={Voorspellingen} />
            <Route path="/" component={PageNotFound} />
          </Switch>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
