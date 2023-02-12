import React from 'react'
import ph from "./ph.png"
export default function Det() 
{
    return (
        <div>
          <br />
            <div className="container">
            <div style={{width: "100%", textAlign: "center"}}>
              <img
              src={ph}
              style={{float: "right", border: "10px",color: "rgb(255, 196, 86)"}}
              height="250px"
              className="rounded-circle pic"
              />
            </div>
            <h1 className="display-3" data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="JOHN" style={{cursor: "pointer"}}><span className="name">JOHN DOE</span></h1>
            <p>
              Email ID: <a className="display-8"
              >employee_1@gmail.com</a>
              <br/>
              <a>Phone Number:</a> 123456789
            </p>
            <hr />
            <h3 id="acad"><u>Academic information:</u></h3>
            <div style={{overflowX: "auto"}}>
              <table className="table1">
                <thead>
                  <tr>
                    <th>Course details</th>
                    <th>Institution</th>
                    <th>University/Board</th>
                    <th>year of passing</th>
                    <th>CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bachelors of Technology (Computer Science Engineering)</td>
                    <td>Keshav Memorial Institute of Technology</td>
                    <td>JNTUH</td>
                    <td>2025</td>
                    <td>9.9</td>
                  </tr>
                  <tr>
                    <td>Intermediate-MPBC</td>
                    <td>Delhi Public School, Nacharam</td>
                    <td>CBSE</td>
                    <td>2021</td>
                    <td>96.4%</td>
                  </tr>
                  <tr>
                    <td>School of Secondary Education</td>
                    <td>Delhi Public School, Nacharam</td>
                    <td>CBSE</td>
                    <td>2019</td>
                    <td>95.6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <h3 id="tech"><u>Technical skills:</u></h3>
            <h4>Programming Languages:</h4>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
            <h4>Databases:</h4>
            <ul>
              <li>MySQL</li>
            </ul>
            <h4>Web Technologies:</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>BootStrap</li>
              <li>Node</li>
            </ul>
            <hr />
            <h3 id="pr"><u>Notable Projects:</u></h3>
            <ul>
              <li>Faculty Recruiting and Monitoring</li>
            </ul>
            <hr />
            <h3 id="ac"><u>Notable Achievements:</u></h3>
            <ul>
              <li>Silver Medal in Python for Data Science Course (NPTEL)</li>
            </ul>
            <hr/>
            <h3><u>Resume:</u> <a style={{fontSize: "23px"}} href="">Resume.pptx</a></h3>
            <hr />
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
                            Modifications
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
                              <label for="message-text" className="col-form-label"
                                >Name:</label>
                              <input
                                className="form-control"
                                id="message-text"
                              ></input>
                              <label for="message-text" className="col-form-label"
                                >Email-ID:</label>
                              <input
                                className="form-control"
                                id="message-text"
                              ></input>
                              <label for="message-text" className="col-form-label"
                                >Phone Number:</label>
                              <input
                                className="form-control"
                                id="message-text"
                              ></input>
                              <form action="/action_page.php">
                                <label for="message-text" className="col-form-label"
                                >Resume:</label>
                                <input type="file" id="myFile" name="filename"/>
                              </form>
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
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </div>
    );
}

