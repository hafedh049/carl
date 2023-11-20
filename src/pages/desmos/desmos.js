import functionPlot from "function-plot";

functionPlot({
    title: 'y = x * x',
    target: '#quadratic',
    width: 580,
    height: 400,
    disableZoom: true,
    xAxis: {
      label: 'x - axis',
      domain: [-6, 6]
    },
    yAxis: {
      label: 'y - axis'
    },
    data: [{
      fn: 'x^2'
    }]
  })