import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-charts';

// eslint-disable-next-line react/prefer-stateless-function
class Body extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
                <div className="btn-group pull-right">
                  <ol className="breadcrumb hide-phone p-0 m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Annex</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="card m-b-30">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <div className="col-3 align-self-center">
                      <div className="round">
                        <i className="mdi mdi-webcam" />
                      </div>
                    </div>
                    <div className="col-6 align-self-center text-center">
                      <div className="m-l-10">
                        <h5 className="mt-0 round-inner">$18090</h5>
                        <p className="mb-0 text-muted">Visits Today</p>
                      </div>
                    </div>
                    <div className="col-3 align-self-end align-self-center">
                      <h6 className="m-0 float-right text-center text-danger">
                        {' '}
                        <i className="mdi mdi-arrow-down" /> <span>5.26%</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="card m-b-30">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <div className="col-3 align-self-center">
                      <div className="round">
                        <i className="mdi mdi-account-multiple-plus" />
                      </div>
                    </div>
                    <div className="col-6 text-center align-self-center">
                      <div className="m-l-10 ">
                        <h5 className="mt-0 round-inner">562</h5>
                        <p className="mb-0 text-muted">New Users</p>
                      </div>
                    </div>
                    <div className="col-3 align-self-end align-self-center">
                      <h6 className="m-0 float-right text-center text-success">
                        {' '}
                        <i className="mdi mdi-arrow-up" /> <span>8.68%</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="card m-b-30">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <div className="col-3 align-self-center">
                      <div className="round ">
                        <i className="mdi mdi-basket" />
                      </div>
                    </div>
                    <div className="col-6 align-self-center text-center">
                      <div className="m-l-10 ">
                        <h5 className="mt-0 round-inner">7514</h5>
                        <p className="mb-0 text-muted">New Orders</p>
                      </div>
                    </div>
                    <div className="col-3 align-self-end align-self-center">
                      <h6 className="m-0 float-right text-center text-danger">
                        {' '}
                        <i className="mdi mdi-arrow-down" /> <span>2.35%</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="card m-b-30">
                <div className="card-body">
                  <div className="d-flex flex-row">
                    <div className="col-3 align-self-center">
                      <div className="round">
                        <i className="mdi mdi-rocket" />
                      </div>
                    </div>
                    <div className="col-6 align-self-center text-center">
                      <div className="m-l-10">
                        <h5 className="mt-0 round-inner">$32874</h5>
                        <p className="mb-0 text-muted">Total Sales</p>
                      </div>
                    </div>
                    <div className="col-3 align-self-end align-self-center">
                      <h6 className="m-0 float-right text-center text-success">
                        {' '}
                        <i className="mdi mdi-arrow-up" /> <span>2.35%</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-8">
              <div className="card m-b-30">
                <div className="card-body">
                  <h5 className="header-title pb-3 mt-0">Overview</h5>
                  <div id="multi-line-chart" style={{ height: 400 }}>
                    <Chart
                      data={[
                        {
                          label: 'Series 1',
                          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 10]],
                        },
                        {
                          label: 'Series 2',
                          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]],
                        },
                        {
                          label: 'Series 3',
                          data: [[0, 2], [1, 5], [2, 4], [3, 2], [4, 7]],
                        },
                      ]}
                      axes={[
                        { primary: true, type: 'linear', position: 'bottom' },
                        { type: 'linear', position: 'left' },
                      ]}
                      primaryCursor
                      tooltip
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12 col-xl-4">
              <div className="card m-b-30">
                <div className="card-body">
                  <a href="" className="btn btn-primary btn-sm float-right">
                    More Info
                  </a>
                  <h5 className="header-title mt-0 pb-3">Revenue By Country</h5>

                  <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                      <p>
                        <i className="mdi mdi-checkbox-blank-circle text-primary mr-2" />
                        Canada
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p>
                        <i className="mdi mdi-checkbox-blank-circle text-info mr-2" />
                        USA
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p>
                        <i className="mdi mdi-checkbox-blank-circle text-greylight mr-2" />
                        London
                      </p>
                    </li>
                  </ul>
                  <div id="morris-donut-chart" style={{ height: 345 }} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12 align-self-center">
              <div className="card bg-white m-b-30">
                <div className="card-body new-user">
                  <h5 className="header-title mb-4 mt-0">Members Profiles</h5>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th className="border-top-0" style={{ width: 60 }}>
                            Member
                          </th>
                          <th className="border-top-0">Name</th>
                          <th className="border-top-0">Country</th>
                          <th className="border-top-0">Earnings</th>
                          <th className="border-top-0">Sales</th>
                          <th className="border-top-0">Reviews</th>
                          <th className="border-top-0">Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              className="rounded-circle"
                              src="assets/images/users/avatar-2.jpg"
                              alt="user"
                              style={{ width: 40 }}
                            />{' '}
                          </td>
                          <td>
                            <a href="javascript:void(0);">Ruby T. Curd</a>
                          </td>
                          <td>
                            <img
                              src="assets/images/flags/us_flag.jpg"
                              alt=""
                              style={{ width: 30 }}
                            />
                          </td>
                          <td>$100</td>
                          <td>10</td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="94"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: 30 }}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded-circle"
                              src="assets/images/users/avatar-2.jpg"
                              alt="user"
                              style={{ width: 40 }}
                            />{' '}
                          </td>
                          <td>
                            <a href="javascript:void(0);">Ruby T. Curd</a>
                          </td>
                          <td>
                            <img
                              src="assets/images/flags/us_flag.jpg"
                              alt=""
                              style={{ width: 30 }}
                            />
                          </td>
                          <td>$100</td>
                          <td>10</td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="94"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: 30 }}
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              className="rounded-circle"
                              src="assets/images/users/avatar-2.jpg"
                              alt="user"
                              style={{ width: 40 }}
                            />{' '}
                          </td>
                          <td>
                            <a href="javascript:void(0);">Ruby T. Curd</a>
                          </td>
                          <td>
                            <img
                              src="assets/images/flags/us_flag.jpg"
                              alt=""
                              style={{ width: 30 }}
                            />
                          </td>
                          <td>$100</td>
                          <td>10</td>
                          <td>
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star text-warning" />
                            <i className="mdi mdi-star-half text-warning" />
                            <i className="mdi mdi-star-outline text-warning" />
                          </td>
                          <td>
                            <div className="progress" style={{ height: 8 }}>
                              <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                aria-valuenow="94"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: 30 }}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    );
  }
}

Body.propTypes = {};

export default Body;
