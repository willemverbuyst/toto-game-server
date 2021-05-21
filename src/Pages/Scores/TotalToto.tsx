import { Box, Breadcrumbs, Button, Divider, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ScoresBarChart from '../../Components/Chart/ScoresBarChart';
import Message from '../../Components/Message';
import PageTitle from '../../Components/PageTitle';
import ProgressLinear from '../../Components/Progress/ProgressLinear';
import TotoRoundSelector from '../../Components/Selector/TotoRoundSelector';
import { selectAppLoading } from '../../store/appState/selectors';
import { fetchScoresTotalToto } from '../../store/scores/actions';
import { selectTotalToto } from '../../store/scores/selectors';
import { UserWithScore } from '../../store/scores/types';
import { selectToken } from '../../store/user/selectors';
import { breadCrumbs, divider, progress, subTitle, subTitleSection, topSection } from '../../ui/sharedClasses';

const useStyles = makeStyles((theme: Theme) => ({
  ...divider(theme),
  ...progress(),
  ...topSection(theme),
  ...subTitle(theme),
  ...subTitleSection(theme),
  ...breadCrumbs(theme),
}));

const TotalToto: React.FC = (): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  const totalToto = useSelector(selectTotalToto);
  const isLoading = useSelector(selectAppLoading);
  const theme = useTheme();
  const btnVariant = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    if (!token) history.push('/login');
  });

  useEffect(() => {
    if (!totalToto) {
      dispatch(fetchScoresTotalToto());
    }
  }, [dispatch, totalToto]);

  const totalTotoSortedByUserName: UserWithScore[] = totalToto
    ? [...totalToto].sort((name1, name2) => name1.user.toLowerCase().localeCompare(name2.user.toLowerCase()))
    : [];

  const gotoTotoRound = () => history.push(`/voorspellingen/1/1`);

  return (
    <Box>
      <Grid container className={classes.topSection}>
        <PageTitle text="Klassement" />
        <Grid>
          <Button
            variant={btnVariant ? 'contained' : 'outlined'}
            size="small"
            color="primary"
            disableElevation
            onClick={gotoTotoRound}
          >
            MIJN VOORSPELLINGEN
          </Button>
        </Grid>
      </Grid>

      {isLoading ? (
        <Box className={classes.progress}>
          <ProgressLinear />
        </Box>
      ) : totalToto && totalToto.length > 0 ? (
        <>
          <Grid item xs={12} container justify="center" className={classes.subTitleSection}>
            <Typography variant="h4" className={classes.subTitle}>
              TOTAAL TOTO
            </Typography>
          </Grid>

          <Divider className={classes.divider} />

          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={6} container justify="center">
              <ScoresBarChart scores={totalTotoSortedByUserName} />
            </Grid>
          </Grid>
        </>
      ) : (
        <Message message={`Nog geen scores voor totalToto`} />
      )}
      <Grid container justify="center" className={classes.breadCrumbs}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Button color="primary" disabled>
            Totaal Toto
          </Button>
          <TotoRoundSelector />
          <Button color="primary" disabled>
            Ronde
          </Button>
        </Breadcrumbs>
      </Grid>
    </Box>
  );
};

export default TotalToto;
