import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Pink"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 9],
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(54, 162, 235, 0.48)",
        "rgba(255, 206, 86, 0.48)",
        "rgba(75, 192, 192, 0.48)",
        "rgba(153, 102, 255, 0.48)",
        "rgba(255, 159, 64, 0.48)",
        "rgba(255, 105, 180, 0.48)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 0.96)",
        "rgba(54, 162, 235, 0.96)",
        "rgba(255, 206, 86, 0.96)",
        "rgba(75, 192, 192, 0.96)",
        "rgba(153, 102, 255, 0.96)",
        "rgba(255, 159, 64, 0.96)",
        "rgba(255, 105, 180, 0.96)",
      ],
      borderWidth: 1,
    },
  ],
};

export function CustomChart(props) {
  console.log(props);
  console.log(props.array.length);
  console.log(props.array[0].category);

  return (
    <div style={{ height: "50vh" }}>
      <Doughnut data={data} />
    </div>
  );
}
