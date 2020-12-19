import React from 'react';
import { useHistory } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import { PredictionWithScorePerUser } from '../../store/scores/types';

type Prop = {
  scores: PredictionWithScorePerUser[]
}

export default function ScoresFixtureBarChart({ scores }: Prop) {
  const history = useHistory();
  const labels = scores.map(player => player.user.toLocaleUpperCase());
  const userScores = scores.map(player => player.score);
  const userPredictions = scores.map(player => `${player.pGoalsHomeTeam} - ${player.pGoalsAwayTeam}`)
  const max = Math.max(...userScores) * 1.2;
  
  const gotoPlayer = (id: number) => 
    history.push(`/spelers/${scores[id].userId}`);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: userScores,
        backgroundColor:' #1e5eb1',
        borderWidth: 0,
        hoverBackgroundColor: '#EA9C3B',
      },
    ],
    tooltipItem: 'hello'
  };

  return (
    <Bar
      data={chartData}
      options={{
        tooltips: {
          enabled: true, 
          callbacks: {
            title: (tooltipItem, _chartData) => 
              `Voorspelling: ${userPredictions[tooltipItem[0].index!]}`,
            label: () => ''
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
             align:'top',
             display: true,
             color: 'black',
          }
        }  
      }}
      onElementsClick={(e) => {if (e[0] !== undefined ) gotoPlayer(e[0]._index)}}
    />
  );
}