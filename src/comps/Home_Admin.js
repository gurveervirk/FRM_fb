import React from "react";
import { NavLink } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Vacancies','Filled Positions'],
  datasets: [
    {
      label: 'Count',
      data: [25,75],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
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
export default function Home() {
  return (
    <div>
      <br />
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="d-flex flex-row mb-3" style={{ textAlign: "center" }}>
          <div className="col">
            <table className="table table-responsive table-striped table-hover table-bordered table1">
              <tr>
              <div style={{height:"490px", padding:"15px"}}>
                <Pie data={data} options={options}/>
              </div>
              </tr>
              <tr>
              <td>
                    <NavLink to="/Rec" style={{fontSize: "20px", fontWeight: "bold", color: "aqua"}}>Recruitments</NavLink>
                    <p>New Applications: 25</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
