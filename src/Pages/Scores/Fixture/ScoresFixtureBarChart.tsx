import 'chartjs-plugin-datalabels';

import * as chartjs from 'chart.js';
import React, { ReactElement } from 'react';
import { ChartData } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import HorizontalBarChart from '../../../Components/Chart/HorizontalBarChart';
import * as HISTORY from '../../../history';
import { IPlayerWithScoreAndPrediction } from '../../../models/player.model';
import { selectUserId } from '../../../store/user/selectors';
import * as UTILS from '../../../utils';

interface IProps {
  scores: IPlayerWithScoreAndPrediction[];
}

const ScoresForFixtureBarChart: React.FC<IProps> = ({
  scores,
}: IProps): ReactElement => {
  const userId: number | null = useSelector(selectUserId);
  const labels = scores.map(
    (score) =>
      `${score.name.toLocaleUpperCase()}    [${score.pGoalsHomeTeam} - ${
        score.pGoalsHomeTeam
      }]   `,
  );
  const userScores: number[] = scores.map((score) => score.score);
  const contraUserScores: number[] = userScores.map((score) => 10 - score);
  const hoverBackgroundColors: string[] = UTILS.getHoverColorsBars<IPlayerWithScoreAndPrediction>(
    scores,
  );
  const backgroundColor: string[] = UTILS.getColorBars<IPlayerWithScoreAndPrediction>(
    scores,
    userId,
  );

  const gotoScoresPlayer = (index: number): void => {
    const id: number = scores[index].id;
    userId && userId === id
      ? HISTORY.gotoScoresUser()
      : HISTORY.gotoScoresPlayer(id);
  };

  const chartData: ChartData<chartjs.ChartData> = {
    labels: labels,
    datasets: [
      {
        stack: '1',
        label: 'part1',
        data: userScores,
        backgroundColor: backgroundColor,
        borderWidth: 0,
        hoverBackgroundColor: hoverBackgroundColors,
      },
      {
        stack: '1',
        label: 'part4',
        data: contraUserScores,
        backgroundColor: '#eee',
        borderWidth: 0,
        hoverBackgroundColor: hoverBackgroundColors,
      },
    ],
  };

  const chartOptions: chartjs.ChartOptions = {
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            display: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          position: 'top',
          stacked: true,
          ticks: {
            display: true,
            suggestedMin: 0,
            suggestedMax: 10,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        display: false,
        anchor: 'end',
        align: 'start',
        color: '#f1f1f1',
      },
    },
  };

  return (
    <HorizontalBarChart
      chartData={chartData}
      chartOptions={chartOptions}
      goto={gotoScoresPlayer}
    />
  );
};

export default ScoresForFixtureBarChart;
