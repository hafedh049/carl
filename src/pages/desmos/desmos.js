function doit() {
  let contentsBounds = document.body.getBoundingClientRect();
  let width = contentsBounds.width;
  let height = contentsBounds.height;
  
  functionPlot({
    target: "#root",
    width:width,
    hight:height,
    yAxis: { domain: [-100, 100] },
    grid: true,
    data: [
      {
        fn: "x^3",
        derivative: {
          fn: "2 * x",
          updateOnMouseMove: true,
        },
      },
    ],
  });
}
