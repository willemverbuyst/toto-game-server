import { Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactElement } from 'react';

import LogoMediumComponent from '../../../Components/Logo/LogoMedium';
import { IFixture } from '../../../models/toto.models';
import * as UTILS from '../../../utils';
import TextComponent from './Text';

const useStyles = makeStyles((theme: Theme) => ({
  fixture: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0),
    },
    marginBottom: theme.spacing(6),
  },
  date: {
    marginBottom: theme.spacing(2),
  },
}));

interface IProps {
  fixture: IFixture;
}

const FixtureSection: React.FC<IProps> = ({ fixture }: IProps): ReactElement => {
  const classes = useStyles();
  const {
    eventTimeStamp,
    homeTeamName,
    homeTeamLogo,
    goalsHomeTeam,
    goalsAwayTeam,
    awayTeamName,
    awayTeamLogo,
  } = fixture;
  const formattedDate = UTILS.formatTimeStampToLocalDate(eventTimeStamp);
  const goals =
    Number.isInteger(goalsAwayTeam) && Number.isInteger(goalsHomeTeam) ? `${goalsHomeTeam} - ${goalsAwayTeam}` : ` - `;

  return (
    <Grid className={classes.fixture}>
      <Grid item xs={12} container justify="center" className={classes.date}>
        <Typography variant="overline">{formattedDate}</Typography>
      </Grid>
      <Grid item xs={12} container justify="center">
        <TextComponent xs={3} sm={3} content={homeTeamName} justify="flex-end" />
        <LogoMediumComponent alt={homeTeamName} source={homeTeamLogo} />
        <TextComponent xs={3} sm={1} content={goals} justify="center" />
        <LogoMediumComponent alt={awayTeamName} source={awayTeamLogo} />
        <TextComponent xs={3} sm={3} content={awayTeamName} justify="flex-start" />
      </Grid>
    </Grid>
  );
};

export default FixtureSection;
