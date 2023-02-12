import React from 'react';
export default function Testing() {
      return (
        <div>
          <div className='bg'/>
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="./00_LogIn.html">Recruiter.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex ms-auto my-3 my-lg-0">
                <div className="input-group me-lg-2">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search" />
                  </button>
                </div>
              </form>
              <ul className="navbar-nav ">
                <li className="nav-item my-2 mx-2">
                  <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-globe pe-2" />Explore</a>
                </li>
                <li className="nav-item my-2 mx-2">
                  <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-info-circle pe-2" />About US</a>
                </li>
                <li className="nav-item my-2 mx-2">
                  <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-telephone pe-2" />Contact US</a>
                </li>
                <li className="nav-item my-2 mx-2">
                  <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Join US</button>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Please Login To Continue</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-12">
                              <ul id="tabs" className="nav nav-tabs nav-fill">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active px-3" data-bs-toggle="tab" id="signin-tab" type="button" data-bs-target="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</button>  
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link px-3" data-bs-toggle="tab" id="signup-tab" type="button" data-bs-target="#signup" role="tab" aria-controls="signup" aria-selected="true">Sign Up</button>  
                                </li>
                              </ul> 
                              <div className="tab-content" id="myTabControl">
                                <div className="tab-pane fade show active" role="tabpanel" id="signin" aria-labelledby="signin-tab">
                                  <div className="form-floating my-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                  </div>
                                  <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                  </div>
                                  <div className="d-grid gap-2">
                                    {/* <button class="btn btn-primary" type="button">Sign In</button> */}
                                    <a href="./01_Home.html" className="btn btn-primary">Sign In</a>
                                  </div>
                                </div>
                                <div className="tab-pane fade show" role="tabpanel" id="signup" aria-labelledby="signup-tab">
                                  <div className="form-floating mt-3">
                                    <div className="row g-2">
                                      <div className="col-md mb-3">
                                        <div className="form-floating">
                                          <input type="text" className="form-control" id="floatingInputGrid" placeholder="First Name" aria-label="First name" />
                                          <label htmlFor="floatingInputGrid">First Name</label>
                                        </div>
                                      </div>
                                      <div className="col-md mb-3">
                                        <div className="form-floating">
                                          <input type="text" className="form-control" id="floatingInputGrid" placeholder="Second Name" aria-label="Second name" />
                                          <label htmlFor="floatingInputGrid">Second Name</label>
                                        </div>
                                      </div>
                                    </div>    
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
                                    <label htmlFor="floatingPassword">Confirm password</label>
                                  </div>
                                  <div className="form-floating mb-3">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                      <option value={1}>...</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Institute</label>
                                  </div>
                                  <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">I accept the <a href="#" target="_blank" rel="noopener noreferrer">Term of Use</a> &amp; <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label>
                                  </div>
                                  <div className="d-grid gap-2">
                                    <button className="btn btn-primary" type="button">Sign Up</button>
                                  </div>
                                </div>
                              </div> 
                            </div>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
      );
    }