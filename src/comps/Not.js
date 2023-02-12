import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Not() 
{
    return (
        <div>
          <br />
            <div className="container" style={{maxWidth: "100%"}}>
        <div className="d-flex flex-row mb-3" style={{textAlign: "center"}}>
          <div className="col">
            <button
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
                                >Subject:</label>
                              <textarea
                                className="form-control"
                                id="message-text"
                              ></textarea>
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
                  </div>
          </div>
          <div className="col">
            <form className="d-inline-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div
                    className="modal fade"
                    id="newvac"
                    tabindex="-1"
                    aria-labelledby="msgcontLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="msgcontLabel">
                            MESSAGE CONTENT
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
                              <label for="recipient-names" className="col-form-label"
                                >Recipients:</label>
                              <input
                                type="text"
                                className="form-control"
                                id="recipient-name"
                              />
                            </div>
                            <div className="mb-3">
                              <label for="message-text" className="col-form-label"
                                >Subject:</label>
                              <textarea
                                className="form-control"
                                id="message-text"
                              ></textarea>
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
                        </div>
                      </div>
                    </div>
                  </div>
        <div className="d-flex flex-row mb-3" style={{textAlign: "center"}}>
          <table
            className="table table-responsive table-striped table-hover table-bordered table1"
          >
            <thead>
              <tr>
                <th scope="col" style={{cursor: "pointer"}}>
                  <i
                    data-mdb-sort="name"
                    className="datatable-sort-icon fa fa-arrow-up"
                  ></i>
                  S.NO
                </th>
                <th scope="col" style={{cursor: "pointer"}}>
                  <i
                    data-mdb-sort="name"
                    className="datatable-sort-icon fa fa-arrow-up"
                  ></i>
                  SUBJECT OF MESSAGE
                </th>
                <th scope="col" style={{cursor: "pointer"}}>
                  <i
                    data-mdb-sort="name"
                    className="datatable-sort-icon fa fa-arrow-up"
                  ></i>
                  RECIPIENTS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th><a href="" data-bs-toggle="modal" data-bs-target="#newvac">New Vacancy</a></th>
                <th><a href="">JANE DOE</a>, <NavLink to="/employ">JOHN DOE</NavLink> ....</th>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        </div>
    );
}

