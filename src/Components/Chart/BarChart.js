import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const pieData = {
  indexAxis: "x",
  labels: [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "React Native",
    "Node",
    "React",
    "React Native",
    "Node",
  ],
  datasets: [
    {
      label: "Skills",
      data: [85, 90, 80, 83, 60, 70, 83, 60, 70],
      backgroundColor: "#7A45FB",
      borderRadius: 80,
      color: "#7A45FB",
      borderWidth: 0,
      barThickness: 25, // Adjust the width here
    },
  ],
};

const BarChart = () => {
  return (
    <div
      className=" col-12 col-lg-6 col-md-6 p-2 pe-0"
    >
        <div 
      style={{
        height: 300,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        boxShadow:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          backgroundColor:"#ffffff"
      }} className=" rounded-4 p-4 pb-3 ">
      <p className="about-title d-block d-lg-none">Skills.</p>
      <Bar
        options={{
          maintainAspectRatio: false,
        }}
        data={pieData}
      />
      </div>
    </div>
  );
};

export default BarChart;
