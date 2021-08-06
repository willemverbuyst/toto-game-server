import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MessageComponent from '../../../Components/Communication/Message';
import PageTitle from '../../../Components/Title/PageTitle';
import PageContent from '../../../Sections/PageContent';
import Predictions from '../../../Sections/Predictions';
import { getAllPredictions } from '../../../store/predictions/action-creators';
import { selectAllPredictionsSortedByTime } from '../../../store/predictions/selectors';
import { selectUser } from '../../../store/user/selectors';
import * as UTILS from '../../../utils';
import Pagination from './Pagination';

const PredictionsUser: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const allPredictionsSortedByTime = useSelector(
    selectAllPredictionsSortedByTime,
  );
  const { ronde } = useParams<{ ronde: string }>();
  const { totoronde } = useParams<{ totoronde: string }>();
  const round = Number(ronde);
  const totoRound = Number(totoronde);
  const user = useSelector(selectUser);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!allPredictionsSortedByTime) {
      (async () => {
        await dispatch(getAllPredictions(Number(user?.id)));
        if (!allPredictionsSortedByTime) {
          setMessage('Geen voorspellingen gevonden');
        }
      })();
    }
  }, [dispatch, user]);

  const filteredPredictions = allPredictionsSortedByTime
    ? [
        ...allPredictionsSortedByTime[totoRound - 1][
          UTILS.calculateIndex(round)
        ],
      ]
    : null;

  return (
    <PageContent
      loadingText=""
      content={
        <>
          <PageTitle title="Mijn voorspellingen" color="primary" />
          {filteredPredictions ? (
            <>
              <Predictions
                predictions={filteredPredictions}
                display="private"
              />
              <Pagination totoround={totoRound} round={round} />
            </>
          ) : (
            <MessageComponent message={message} />
          )}
        </>
      }
    />
  );
};

export default PredictionsUser;
