import 'chartjs-plugin-datalabels';

import * as chartjs from 'chart.js';
import React, { ReactElement } from 'react';
import { ChartData } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import BarChart from '../../../Components/Chart/BarChart';
import { IScoresPlayer } from '../../../models/player.model';
import { selectUser } from '../../../store/user/selectors';

interface Color {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}

interface IProps {
  scoresPlayer: IScoresPlayer;
  colorMain: Color;
  colorHover: Color;
  loggedInUser: boolean;
}

const ScoresStackedChart: React.FC<IProps> = ({
  scoresPlayer,
  colorMain,
  colorHover,
  loggedInUser,
}: IProps): ReactElement => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const { id, scores } = scoresPlayer;

  let colorPrimary;
  let colorSecondary;

  if (!loggedInUser && user?.id === id) {
    colorPrimary = colorHover;
    colorSecondary = colorMain;
  } else {
    colorPrimary = colorMain;
    colorSecondary = colorHover;
  }

  const gotoTotoRound = (id: number) => {
    const totoRound = id + 1;
    loggedInUser
      ? history.push(`/voorspellingen/${totoRound}/${totoRound * 3 - 2}`)
      : history.push(`/spelers/${totoRound}/voorspellingen/${totoRound}/${totoRound * 3 - 2}`);
  };

  const totals = scores.map((totoround) => totoround.reduce((a, b) => a + b));
  const max = Math.max(...totals) * 1.2;

  const chartData: ChartData<chartjs.ChartData> = {
    labels: scores.map(() => ``),
    datasets: [
      {
        stack: '',
        label: 'part1',
        data: scores.map((totoRound) => (totoRound[0] ? totoRound[0] : 0)),
        backgroundColor: colorPrimary.color1,
        hoverBackgroundColor: colorSecondary.color1,
        barPercentage: 1,
      },
      {
        stack: '',
        label: 'part2',
        data: scores.map((totoRound) => (totoRound[1] ? totoRound[1] : 0)),
        backgroundColor: colorPrimary.color2,
        hoverBackgroundColor: colorSecondary.color2,
        barPercentage: 1,
      },
      {
        stack: '',
        label: 'part3',
        data: scores.map((totoRound) => (totoRound[2] ? totoRound[2] : 0)),
        backgroundColor: colorPrimary.color3,
        hoverBackgroundColor: colorSecondary.color3,
        barPercentage: 1,
      },
      {
        stack: '',
        label: 'part4',
        data: scores.map((totoRound) => (totoRound[3] ? totoRound[3] : 0)),
        backgroundColor: colorPrimary.color4,
        hoverBackgroundColor: colorSecondary.color4,
        barPercentage: 1,
      },
    ],
  };

  const chartOptions: chartjs.ChartOptions = {
    tooltips: {
      enabled: true,
      callbacks: {
        title: (tooltipItem) =>
          tooltipItem[0].index ? `Totoronde ${Number([tooltipItem[0].index]) + 1}` : `Totoronde 1`,
        label: (tooltipItem) => (tooltipItem.index ? `Score:${totals[tooltipItem.index]}` : `Score:${totals[0]}`),
      },
    },
    legend: {
      display: false,
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0,
            suggestedMax: max,
          },
          gridLines: {
            display: false,
          },
          stacked: true,
        },
      ],
      xAxes: [
        {
          ticks: {
            display: true,
          },
          gridLines: {
            display: false,
          },
          stacked: true,
        },
      ],
    },
    plugins: {
      datalabels: {
        display: (ctx) => ctx.datasetIndex === 3,
        formatter: (_value, ctx) => totals[ctx.dataIndex],
        anchor: 'end',
        align: 'end',
        color: '#000',
      },
    },
  };

  return <BarChart chartData={chartData} chartOptions={chartOptions} goto={gotoTotoRound} />;
};

export default ScoresStackedChart;
