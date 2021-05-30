import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import MessageComponent from '../../../Components/Communication/Message';
import DividerComponent from '../../../Components/Divider';
import PageHeaderWithButton from '../../../Components/Header/PageHeaderWithBtn';
import SubTitleComponent from '../../../Components/Title/SubTitle';
import { fetchScoresTotoRound } from '../../../store/scores/actions';
import { selectTotoRound } from '../../../store/scores/selectors';
import { UserWithScore } from '../../../store/scores/types';
import ScoresBarChart from '../../Sections/Charts/ScoresBarChart';
import PageContent from '../../Sections/PageContent';
import BreadCrumbsSection from './BreadCrumbsSection';

const TotoRound: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const totoRound = useSelector(selectTotoRound);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!totoRound || (totoRound && +id !== +totoRound.id)) {
      dispatch(fetchScoresTotoRound(+id));
    }
  }, [dispatch, id, totoRound]);

  const totoRoundSortedByUserName: UserWithScore[] =
    totoRound && totoRound.usersWithScores
      ? [...totoRound.usersWithScores].sort((name1, name2) =>
          name1.user.toLowerCase().localeCompare(name2.user.toLowerCase()),
        )
      : [];

  const gotoTotoRound = () => history.push(`/voorspellingen/${id}/${+id * 3 - 2}`);

  return (
    <PageContent
      loadingText="Klassement"
      content={
        totoRound && totoRound.usersWithScores && totoRound.usersWithScores.length > 0 ? (
          <>
            <PageHeaderWithButton
              title="Klassement"
              captionBtn="MIJN VOORSPELLINGEN"
              colorBtn="primary"
              handleClick={gotoTotoRound}
            />
            <SubTitleComponent text={`TOTO RONDE ${id}`} />
            <DividerComponent />
            <ScoresBarChart scores={totoRoundSortedByUserName} />
            <BreadCrumbsSection id={id} />
          </>
        ) : (
          <MessageComponent message={`Nog geen scores voor toto ronde ${id}`} />
        )
      }
    />
  );
};

export default TotoRound;
