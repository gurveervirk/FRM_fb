import React,{useState} from "react";
import { NavLink } from "react-router-dom";

export default function Rec() 
{
  const [data, setData] = useState([
    { s:1, branch: "CSE", sub: "IML", year: 2, name:'JANE'},
    { s:2, branch: "CSM", sub: "ACT", year: 1, name:'JOHN'},
  ]);
  const [selectedbranch, setSelectedbranch] = useState("All");
  const [selectedsub, setSelectedsub] = useState("All");
  const [selectedyear, setSelectedyear] = useState("All");
  const yearOptions = ["All", 1, 2, 3, 4];
  const branchOptions = ["All", "CSE", "CSM", "CSD","ECE","EEE"];
  const subOptions = ["All", "ACT", "LADE", "MFCS","ADE","IML"];
  const handlebranchChange = event => {
    setSelectedbranch(event.target.value);
  };
  const handlesubChange = event => {
    setSelectedsub(event.target.value);
  };
  const handleyearChange = event => {
        setSelectedyear(event.target.value);
  };
      
      
  let filteredData = data;
  if (selectedyear !== "All") {
            filteredData = filteredData.filter(val => val.year === selectedyear);
  }
  if (selectedbranch !== "All") {
    filteredData = filteredData.filter(val => val.branch === selectedbranch);
  }
  if (selectedsub !== "All") {
    filteredData = filteredData.filter(val => val.sub === selectedsub);
  }
  return (
    <div>
      <br />
        <div className="container" style={{maxWidth: "100%"}}>
    <div className="d-flex flex-row mb-3" style={{textAlign: "center"}}>
    <div className='col x mx-2'>
          Branch: 
          <select value={selectedbranch} onChange={handlebranchChange} className="form-select form-select-sm">
            {branchOptions.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className='col x mx-2'>
          Subjects: 
          <select value={selectedsub} onChange={handlesubChange} className="form-select form-select-sm">
            {subOptions.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className='col x mx-2'>
          Year: 
          <select value={selectedyear} onChange={handleyearChange} className="form-select form-select-sm">
            {yearOptions.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
    </div>
    <div className="d-flex flex-row mb-3" style={{textAlign: "center"}}>
      <table
        className="table table-responsive table-striped table-hover table-bordered"
      >
        <thead>
          <tr>
            <th scope="col" style={{cursor: "pointer"}}>
              <i
                data-mdb-sort="name"
                className="datatable-sort-icon fa fa-arrow-up"
              ></i>S.NO
            </th>
            <th scope="col" style={{cursor: "pointer"}}>
              <i
                data-mdb-sort="name"
                className="datatable-sort-icon fa fa-arrow-up"
              ></i>BRANCH
            </th>
            <th scope="col" style={{cursor: "pointer"}}>
              <i
                data-mdb-sort="name"
                className="datatable-sort-icon fa fa-arrow-up"
              ></i>SUBJECT
            </th>
            <th scope="col" style={{cursor: "pointer"}}>
              <i
                data-mdb-sort="name"
                className="datatable-sort-icon fa fa-arrow-up"
              ></i>YEAR
            </th>
            <th scope="col" style={{cursor: "pointer"}}>
              <i
                data-mdb-sort="name"
                className="datatable-sort-icon fa fa-arrow-up"
              ></i>NAME
            </th>
            <th scope="col">MESSAGE</th>
          </tr>
        </thead>
        <tbody>
        {filteredData.map(val => (
              <tr>
                <td>{val.s}</td>
                <td>{val.branch}</td>
                <td>{val.sub}</td>
                <td>{val.year}</td>
                <td>{val.name}</td>
                <td><button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="JOHN"
                  >
                    Message
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">
                            New message
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-3">
                              <label for="recipient-name" className="col-form-label"
                                >Recipient:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label for="message-text" className="col-form-label"
                                >Message:</label>
                              <textarea
                                className="form-control"
                                id="message-text"
                              ></textarea>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </div>
    </div>
);
}

