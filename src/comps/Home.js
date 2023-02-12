import React from "react";
import { NavLink } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Vac vs App',
      data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function Home() {
  return (
    <div>
      <br />
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="d-flex flex-row mb-3" style={{ textAlign: "center" }}>
          <div className="col">
            <table className="table table-responsive table-striped table-hover table-bordered">
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td
                    style={{
                      width: "50%",
                      alignSelf: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <NavLink
                      to="/Vac"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "aqua",
                      }}
                    >
                      Vacancies vs Applications
                    </NavLink>
                    <div style={{height:"490px", padding:"15px"}}>
                      <Line options={options} data={data}/>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <NavLink
                      to="/Vac"
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "aqua",
                      }}
                    >
                      New Vacancies
                    </NavLink>
                    <p className="l">25 new job postings. Apply now!</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
