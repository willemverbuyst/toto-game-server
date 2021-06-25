import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MessageComponent from '../../../Components/Communication/Message';
import PageTitle from '../../../Components/Title/PageTitle';
import { fetchAllFixtures } from '../../../store/predictions/action-creators';
import { selectFixturesSortedByTime } from '../../../store/predictions/selectors';
import * as UTILS from '../../../utils';
import PageContent from '../../Sections/PageContent';
import Predictions from '../../Sections/Predictions';
import PaginationSection from './PaginationSection';

const PredictionsUser: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const fixturesSortedByTime = useSelector(selectFixturesSortedByTime);
  const { totoronde } = useParams<{ totoronde: string }>();
  const { ronde } = useParams<{ ronde: string }>();

  const t = Number(totoronde);
  const r = Number(ronde);

  useEffect(() => {
    if (!fixturesSortedByTime) {
      dispatch(fetchAllFixtures());
    }
  }, [dispatch, fixturesSortedByTime]);

  const filteredFixtures = fixturesSortedByTime ? [...fixturesSortedByTime[t - 1][UTILS.calculateIndex(r)]] : null;

  return (
    <PageContent
      loadingText="Mijn voorspellingen"
      content={
        filteredFixtures ? (
          <>
            <PageTitle title={`Mijn voorspellingen`} color="primary" />
            <Predictions fixtures={filteredFixtures} display="private" />
            <PaginationSection totoronde={totoronde} ronde={ronde} />
          </>
        ) : (
          <MessageComponent message={`Geen voorspellingen gevonden`} />
        )
      }
    />
  );
};

export default PredictionsUser;