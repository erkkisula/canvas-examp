/* eslint-disable no-undef */
const chartData = {
  type: 'spline',
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

/* Chart updating functions */

const addToChart = (newLabel, newY) => {
  if (!newLabel && !newY) {
    const label = document.getElementById('chartLabel').value;
    const y = Number(document.getElementById('chartValue').value);

    chartData.dataPoints.push({ label, y });
  } else {
    chartData.dataPoints.push({ label: newLabel, y: newY });
  }

  updateTitle();
  colorLastPoint();
  chart.render();
};

const updateTitle = () => {
  chart.options.title.text = `Graafikus on hetkel ${chartData.dataPoints.length} punkti`;
};

const colorLastPoint = () => {
  const length = chartData.dataPoints.length;

  for (let i = 0; i < length; i++) {
    if (i === length - 1) {
      chartData.dataPoints[i].color = 'red';
    } else {
      delete chartData.dataPoints[i].color;
    }
  }
};

/**
 * Lisada ül kus kaardile lisatakse iga sekund uus väärtus vahemikus 0 kuni 255
 * Lahendus all
 */

const randomIterator = () => {
  setInterval(() => {
    addToChart(`punkt: ${chartData.dataPoints.length + 1}`, Math.floor(Math.random() * 256));
  }, 1000);
};

randomIterator();
