import React, { memo, useEffect } from "react";

const InnerChart = ({ data }) => {
  useEffect(() => {
    Plotly.newPlot(
      data.id,
      [
        {
          name: "Price ($)",
          x: Array.from(data.sparkline_in_7d.price).map((i, index) => index),
          y: data.sparkline_in_7d.price,
          xaxis: "x",
          yaxis: "y",
          type: "scatter",
          mode: "lines",
          line: { color: "#584051", size: 2, shape: "spline" },
        },
      ],
      {
        autosize: true,
        height: "50",
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
        },
        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",
        xaxis: {
          autorange: true,
          showgrid: false,
          zeroline: false,
          showline: false,
          autotick: true,
          ticks: "",
          showticklabels: false,
        },
        yaxis: {
          autorange: true,
          showgrid: false,
          zeroline: false,
          showline: false,
          autotick: true,
          ticks: "",
          showticklabels: false,
        },
      },
      { responsive: true, displayModeBar: false }
    );
  }, []);

  return <div id={data.id} className="grow-crypto"></div>;
};

export default memo(InnerChart);
