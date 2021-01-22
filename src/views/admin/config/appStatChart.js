const settings = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 5
    }
  },
  elements: {
    point: {
      radius: 0
    }
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          tickMarkLength: false,
          display: false
        },
        ticks: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          tickMarkLength: false,
          display: false
        },
        ticks: {
          display: false
        }
      }
    ]
  }
}

export default settings
