import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navigation() {
  const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ok");
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            var adm=document.getElementById("Admin");
            var job=document.getElementById("Job_Seeker");
            if(json.au===true){
              console.log(true)
              if(job.style.display!=="none"){
                job.style.display="none";
                adm.style.display="block";
              }
              else{
                adm.style.display="none";
                job.style.display="block";
              }
              history("/Home_Admin");
              // return(<NavLink to="/Home_Admin"></NavLink>); 
            }
            else{
              var x=document.getElementById("dex");
              var y=document.getElementById("det_1");
              var z=document.getElementById("det_2");
              if(x.style.display!=="none"){
                x.style.display="none";
                y.style.display="block";
                z.style.display="block";
              }
              else{
                x.style.display="block";
                y.style.display="none";
                z.style.display="none";
              }
              history("/");
            }
        }
        else{
            window.alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className="head">
      <div id="Job_Seeker">
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ padding: "20px" }}
        >
        <div className="container text-evenly">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#job"
            aria-controls="job"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon" style={{backgroundColor:"white"}}></div>
          </button>
          <div className="collapse navbar-collapse" id="job">
              <ul className="navbar-nav me-auto ms-auto mb-1 mb-lg-0 nav w-100 justify-content-evenly">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={"/"} style={({ isActive }) => ({
                          color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
                        })}>
                      <div className="h">
                        <i className="fa fa-home"></i> Home
                      </div>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      //
                      aria-current="page"
                      to={"/Vac"}
                      style={({ isActive }) => ({
                        color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
                      })}
                    >
                      <div className="h">
                        <i className="fa fa-info"></i> Vacancies
                      </div>
                    </NavLink>
                  </li>
                    <div id="det_1" style={{ display: "none" }}>
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/Applications" style={({ isActive }) => ({
                          color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
                        })}>
                          <div className="h">
                            <i className="fa fa-list"></i> Applications
                          </div>
                        </NavLink>
                      </li>
                    </div>
                    <div id="det_2" style={{ display: "none" }}>
                      <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to={"/Inbox"} style={({ isActive }) => ({
                          color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
                        })}>
                          <div className="h">
                            <i className="fa fa-info"></i> Inbox
                          </div>
                        </NavLink>
                      </li>
                    </div>
                  <div id="dex">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        //
                        aria-current="page"
                        style={{
                          color: 'rgba(255, 255, 255, 0.666)'
                        }}
                      >
                        <div
                          className="h"
                          data-bs-toggle="modal"
                          data-bs-target="#msgcont"
                        >
                          <i className="fa fa-address-book"></i> Login
                        </div>
                      </NavLink>
                    </li>
                  </div>
                  </ul>
            </div>
              </div>
      </nav>
        </div>
      <div id="Admin" style={{display:"none"}}>
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ padding: "20px" }}
        >
          <div className="container text-evenly">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Adm"
            aria-controls="Adm"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon" style={{backgroundColor:"white"}}></div>
          </button>
          <div className="collapse navbar-collapse" id="Adm">
        <ul className="navbar-nav me-auto ms-auto mb-1 mb-lg-0 nav w-100 justify-content-evenly">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={"/Home_Admin"} style={({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
  })}>
                        <div className="h">
                          <i className="fa fa-home"></i> Home
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={"/Fac"} style={({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
  })}>
                        <div className="h">
                          <i className="fa far fa-id-card"></i> Faculty
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={"/Rec"} style={({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
  })}>
                        <div className="h">
                          <i className="fa fa-list"></i> Recruitments
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to={"/Not"} style={({ isActive }) => ({
    color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
  })}>
                        <div className="h">
                          <i className="fa fa-list"></i> Notifications
                        </div>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        //
                        aria-current="page"
                        to={"/Vac_Admin"}
                        style={({ isActive }) => ({
                          color: isActive ? 'white' : 'rgba(255, 255, 255, 0.666)'
                        })}
                      >
                        <div className="h">
                          <i className="fa fa-info"></i> Vacancies
                        </div>
                      </NavLink>
                    </li>
                      <li className="nav-item dropdown">
                      <NavLink
                          className="nav-link dropdown-toggle h"
                          data-bs-toggle="dropdown"
                          aria-current="page"
                          style={{color:'rgba(255, 255, 255, 0.666)'}}
                        ><i className="fa fa-address-book"></i> Account
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <NavLink className="dropdown-item" to="">
                              Settings
                            </NavLink>
                          </li>
                          
                        <li>
                          <NavLink className="dropdown-item" to="/" onClick={handleSubmit}>
                            Sign out
                          </NavLink>
                        </li>
                        </ul>
                      </li>
                              </ul>
                              </div>
                              </div>
                              </nav>
      </div>
      <div
        className="modal fade"
        id="sign"
        // tabIndex="-1"
        aria-labelledby="Signup"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="Signup">
                SIGNUP
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="/sign" method="post">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="ema"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="pass"
                    id=""
                    placeholder="Password"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="modal fade"
        id="msgcont"
        // tabindex="-1"
        aria-labelledby="msgcontLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="msgcontLabel">
                LOGIN
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
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button className="btn btn-primary" onClick={handleSubmit} data-bs-dismiss="modal" href="/Home_Admin">Submit</button>
            </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#sign"
              >
                Sign-Up
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;