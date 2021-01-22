import React from 'react'
import { Line } from 'react-chartjs-2'

import AppCard from '../components/AppCard'
import LineGraphSettings from '../config/lineChart'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: 'rgb(255, 99, 132,0.2)',
      borderColor: 'rgba(255, 99, 132, 0.7)'
    },
    {
      label: '# of No Votes',
      data: [1, 2, 1, 1, 2, 6],
      fill: true,
      backgroundColor: 'rgb(54, 162, 235,0.2)',
      borderColor: 'rgba(54, 162, 235, 0.7)'
    }
  ]
}

const LineChart = () => (
  <>
    <AppCard title='Users Overview'>
      <Line data={data} options={LineGraphSettings} />
    </AppCard>
  </>
)

export default LineChart
