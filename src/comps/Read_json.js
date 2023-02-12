import React from "react";
import Records from "./Rec.json";
export default function Data() {
  return (
    <div>
      <div className="container-fluid table-responsive ml-auto mr-auto" style={{textAlign: "center"}}>
          <table className="table mr-auto ml-auto table1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              {Records &&
                Records.map((Record) => (
                  <tr key={Record.id}>
                    <td>{Record.name}</td>
                    <td>{Record.lati}</td>
                    <td>{Record.lon}</td>
                  </tr>
                ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}
