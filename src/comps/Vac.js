import React,{useState} from 'react'

export default function Vac() 
{
    const [data, setData] = useState([
        { s:1,ins: "KMIT", branch:'CSE', sub: "ACT", year: 1   },
        { s:2,ins: "NGIT", branch:'CSD', sub: "LADE", year :1    },
        { s:3,ins: "KMEC", branch:'CSM', sub: "MFCS", year : 2 }, 
      ]);
      const [selectedins, setSelectedins] = useState("All");
      const [selectedbranch, setSelectedbranch] = useState("All");
      const [selectedsub, setSelectedsub] = useState("All");
      const [selectedyear, setSelectedyear] = useState("All");
      const insOptions = ["All", "KMIT","NGIT", "KMEC"];
      const branchOptions = ["All", "CSE", "CSM", "CSD"];
      const subOptions = ["All", "ACT", "LADE", "MFCS"];
      const yearOptions = ["All", 1, 2, 3, 4];
    
      const handleinsChange = event => {
        setSelectedins(event.target.value);
      };
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
      if (selectedins !== "All") {
        filteredData = filteredData.filter(val => val.ins === selectedins);
      }
      if (selectedbranch !== "All") {
        filteredData = filteredData.filter(val => val.branch === selectedbranch);
      }
      if (selectedsub !== "All") {
        filteredData = filteredData.filter(val => val.sub === selectedsub);
      }
      if (selectedyear !== "All") {
        filteredData = filteredData.filter(val => val.year === selectedyear);
      }
    return (
        <div> 
          <br />
            <div className="container" style={{maxWidth: "100%"}}>
            <div className="d-flex flex-row mb-3" style={{textAlign: "center"}}>
        <div className='col x mx-2'>
          Institution: 
          <select value={selectedins} onChange={handleinsChange} className="form-select form-select-sm">
            {insOptions.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className='col x mx-2' >
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
          Subject: 
          <select value={selectedsub} onChange={handlesubChange}className="form-select form-select-sm">
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
                <div className="d-flex flex-row mb-3 table-responsive" style={{textAlign: "center"}}>
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
                        ></i>INSTITUTION
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
                        APPLY
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map(val => (
              <tr>
                <td>{val.s}</td>
                <td>{val.ins}</td>
                <td>{val.branch}</td>
                <td>{val.sub}</td>
                <td>{val.year}</td>
                <td><button type='button' className='btn btn-primary'>APPLY</button></td>
              </tr>
            ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

