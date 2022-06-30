import { memo, useEffect } from "react";

function MainChart({ data }) {
  useEffect(() => {
    const freshData = data.prices.map((p) => p[1]);

    Plotly.newPlot(
      "mainChart",
      [
        {
          name: "Price ($)",
          text: [...data.prices.map((p) => new Date(p[0]).toDateString())],
          x: data.prices.map((p) => new Date(p[0]).toISOString()),
          y: freshData,
          xaxis: "x",
          yaxis: "y",
          type: "scatter",
          mode: "lines",
          line: { shape: "spline", width: 5 },
        },
      ],
      {
        autosize: true,
        margin: {
          l: 20,
          r: 0,
          b: 20,
          t: 0,
        },
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        xaxis: {
          autorange: true,
          showgrid: false,
          zeroline: false,
        },
        yaxis: {
          autorange: true,
          showgrid: true,
          zeroline: false,
        },
      },
      { responsive: true }
    );
  }, [data]);
  return <div id="mainChart"></div>;
}
export default memo(MainChart);
