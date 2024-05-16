import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const StackedBarChart = () => {
  const data = {
    labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 65,
        maxBarThickness: 65,
        minBarLength: 55,
        label: "Open",
        data: [2, 2, 4, 2, 2],
        backgroundColor: "#39bf2d",
        borderColor: "#2b9022",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        barPercentage: 0.5,
        barThickness: 65,
        maxBarThickness: 65,
        minBarLength: 55,
        label: "Lost",
        data: [4, 4, 3, 4, 4],
        backgroundColor: "#e3c71c",
        borderColor: "#bea718",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Pipeline",
        },
        position: "top" as const,
        align: "end" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 6,
          boxWidth: 6,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        max: 12,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};
