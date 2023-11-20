function doit() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  
  functionPlot({
    target: "#root",
    width:width,
    height:height,
    yAxis: { domain: [-10, 10] },
    grid: true,
    data: [
      {
        fn: "log(x)",
        derivative: {
          fn: "1/x",
          updateOnMouseMove: true,
        },
      },
      {
        fn: "x",
        
      },
    ],
  });
}
