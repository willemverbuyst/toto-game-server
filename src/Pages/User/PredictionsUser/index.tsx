import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MessageComponent from '../../../Components/Communication/Message';
import PageTitle from '../../../Components/Title/PageTitle';
import PageContent from '../../../Sections/PageContent';
import Predictions from '../../../Sections/Predictions';
import { fetchAllFixtures } from '../../../store/predictions/action-creators';
import { selectFixturesSortedByTime } from '../../../store/predictions/selectors';
import * as UTILS from '../../../utils';
import Pagination from './Pagination';

const PredictionsUser: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const fixturesSortedByTime = useSelector(selectFixturesSortedByTime);
  const { ronde } = useParams<{ ronde: string }>();
  const { totoronde } = useParams<{ totoronde: string }>();
  const round = Number(ronde);
  const totoRound = Number(totoronde);

  useEffect(() => {
    if (!fixturesSortedByTime) {
      dispatch(fetchAllFixtures());
    }
  }, [dispatch, fixturesSortedByTime]);

  const filteredFixtures = fixturesSortedByTime
    ? [...fixturesSortedByTime[totoRound - 1][UTILS.calculateIndex(round)]]
    : null;

  return (
    <PageContent
      loadingText="Mijn voorspellingen"
      content={
        filteredFixtures ? (
          <>
            <PageTitle title={`Mijn voorspellingen`} color="primary" />
            <Predictions fixtures={filteredFixtures} display="private" />
            <Pagination totoround={totoRound} round={round} />
          </>
        ) : (
          <MessageComponent message={`Geen voorspellingen gevonden`} />
        )
      }
    />
  );
};

export default PredictionsUser;
