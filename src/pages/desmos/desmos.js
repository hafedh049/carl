function doit() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  functionPlot({
    target: "#root",
    width:width,
    height:,
    yAxis: { domain: [-100, 100] },
    grid: true,
    data: [
      {
        fn: "log(x)",
        derivative: {
          fn: "3 * x",
          updateOnMouseMove: true,
        },
      },
    ],
  });
}
