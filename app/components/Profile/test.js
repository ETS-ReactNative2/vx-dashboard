/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Chart } from 'react-charts';
import { dataChart, urlImage } from 'constantsApp';
import ProfileContentFixed from './ProfileContentFixed';

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
                      <a href="#">Relia</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-lg-10 col-xl-10 mx-auto">
              <div className="card m-b-30" style={{ background: '#f8f9fa' }}>
                <div className="card-body">
                  <div className="col-sm-11 mx-auto body-profile ">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      style={{ width: '100%', height: 300 }}
                      className="img-profile"
                      src={urlImage.backgroundProfile}
                      alt="Card image cap"
                    />
                    <div className="col-md-12 col-lg-12 col-xl-12 profile-info">
                      <div className="row">
                        <div className="row col-md-12 col-lg-12 col-xl-12">
                          <div className="col-md-12 col-lg-12 col-xl-12 profile-row">
                            <div className="row">
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <div className="m-b-30">
                                  <div className="avatar-profile">
                                    <div className="avatar-border">
                                      <img
                                        style={{
                                          width: 80,
                                          marginTop: 10,
                                          marginLeft: 10,
                                        }}
                                        src="assets/images/users/avatar-1.jpg"
                                        alt="user"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="col-md-3 col-lg-3 col-xl-3"
                                style={{}}
                              >
                                <div style={{ paddingTop: 20 }}>
                                  <span className="profile-name">
                                    Ozmotik
                                    <i
                                      className="mdi mdi-star"
                                      style={{ color: '#E3DC01' }}
                                    />
                                  </span>
                                  <div className="">
                                    <i className="ti-location-pin" />
                                    New York, NY
                                  </div>
                                  <div className="title-profile">
                                    <span>MAKERTING</span>
                                    <i
                                      className="mdi mdi-eye"
                                      style={{ padding: 3 }}
                                    />
                                  </div>
                                  <div className="keyword-profile">
                                    <span className="keyword-item">
                                      MARTECH
                                    </span>
                                    <span className="keyword-item">
                                      PR TECH
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end */}
                        <div
                          className="col-md-12 col-lg-12 col-xl-12"
                          style={{ padding: 20 }}
                        >
                          Group Button
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div className="card m-b-30">
                            <div className="card-body">
                              <div
                                id="multi-line-chart"
                                style={{ height: 200 }}
                              >
                                <Chart
                                  data={dataChart.data}
                                  axes={[
                                    {
                                      primary: true,
                                      type: 'linear',
                                      position: 'bottom',
                                    },
                                    { type: 'linear', position: 'left' },
                                  ]}
                                  primaryCursor
                                  tooltip
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div className="card m-b-30">
                            <div className="card-body">
                              <div
                                id="multi-line-chart"
                                style={{ height: 200 }}
                              >
                                <Chart
                                  data={dataChart.data}
                                  axes={[
                                    {
                                      primary: true,
                                      type: 'linear',
                                      position: 'bottom',
                                    },
                                    { type: 'linear', position: 'left' },
                                  ]}
                                  primaryCursor
                                  tooltip
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-12">
                          <div className="card m-b-30">
                            <div className="card-body">
                              <h5 className="header-title pb-3 mt-0">Data</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* end */}
                  </div>
                </div>
                <div className="col-md-11 col-lg-11 col-xl-11 mx-auto">
                  <div className="card m-b-30">
                    <div className="card-body">
                      <h5 className="header-title pb-3 mt-0">Data</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-11 col-lg-11 col-xl-11 mx-auto">
                  <div className="card m-b-30">
                    <div className="card-body">
                      <h5 className="header-title pb-3 mt-0">Data</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Body.propTypes = {};

export default Body;
