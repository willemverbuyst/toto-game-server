import 'chartjs-plugin-datalabels';

import * as chartjs from 'chart.js';
import React, { ReactElement } from 'react';
import { ChartData } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BarChart from '../../../Components/Chart/BarChart';
import { IUser } from '../../../models/player.model';
import { IUserWithScore } from '../../../models/scores.models';
import { selectUser } from '../../../store/user/selectors';
import * as UTILS from '../../../utils';

interface IProps {
  scores: IUserWithScore[];
}

const ScoresBarChart: React.FC<IProps> = ({ scores }: IProps): ReactElement => {
  const history = useHistory();
  const user: IUser | null = useSelector(selectUser);

  const labels: string[] = UTILS.getStringsInUpperCase<keyof IUserWithScore, IUserWithScore>(scores, 'user');

  const scoresOfAllPlayes: number[] = scores.map((player) => player.score);

  const max: number = UTILS.generateMaxForChartYAx(scoresOfAllPlayes, 1.2);
  const hoverBackgroundColors = UTILS.getHoverBackgroundColorsBars<IUserWithScore>(scores);
  const backgroundColor = UTILS.getBackgroundColorBars<IUserWithScore>(scores, user?.id);

  const gotoPlayer = (index: number): void => {
    return user && scores[index].userId === user.id
      ? history.push(`/scores`)
      : history.push(`/spelers/${scores[index].userId}/scores`);
  };

  const chartData: ChartData<chartjs.ChartData> = {
    labels: labels,
    datasets: [
      {
        data: scoresOfAllPlayes,
        backgroundColor: backgroundColor,
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
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            suggestedMin: 0,
            suggestedMax: max,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'top',
        display: true,
        color: 'black',
      },
    },
  };

  return <BarChart chartData={chartData} chartOptions={chartOptions} goto={gotoPlayer} />;
};

export default ScoresBarChart;
