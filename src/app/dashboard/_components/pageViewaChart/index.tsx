import React, { FC } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
  Filler,
  ScriptableContext,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { GraphView } from "../../_interface";
import { formatDate } from "@/utills/formatDate";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface IProps {
  data: GraphView;
}
const PageViewChart: FC<IProps> = ({ data = {} }) => {
  const labels = Object.keys(data).map((date) => formatDate(date));
  const theData = Object.values(data);

  const dataSet = {
    labels,
    datasets: [
      {
        type: "line" as const,
        fill: true,
        borderColor: "#EB7B44",
        borderWidth: 2,
        data: theData,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 84, 3,0.6)");
          gradient.addColorStop(1, "rgba(255, 84, 3,0.03)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,

    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        border: { display: false },
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        border: { display: false, dash: [4, 4] },

        grid: {
          drawBorder: false,
          display: true,
        },
      },
    },
  };

  return <Chart type="bar" data={dataSet} options={options} />;
};

export default PageViewChart;
