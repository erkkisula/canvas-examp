/* eslint-disable no-undef */
const chartData = {
  type: 'column',
  dataPoints: [
    { label: 'jaanuar', y: 10 },
    { label: 'veebruar', y: 15 },
    { label: 'märts', y: 25 },
    { label: 'aprill', y: 30 },
    { label: 'mai', y: 28 },
  ],
};

const chart = new CanvasJS.Chart('chartContainer', {
  title: {
    text: 'Minu graafik',
  },
  data: [chartData],
});

chart.render();
