/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Chart } from 'react-charts';
import { dataChart, urlImage } from 'constantsApp';

// eslint-disable-next-line react/prefer-stateless-function
class ProfileContent extends Component {
  render() {
    return (
      <div className="col-sm-12 profile-info">
        <div className="row">
          <div className="col-md-12 col-lg-12 col-xl-12">
            <div className="card m-b-30">
              <div className="d-flex card-body" style={{ height: 190 }}>
                <div
                  className="col-md-3 col-lg-3 col-xl-3 mx-atuo d-flex flex-row"
                  style={{
                    paddingLeft: 0,
                    paddingRight: 0,
                  }}
                >
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
                  <div className="col-md-10 col-lg-10 col-xl-10" style={{}}>
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
                      {/* <div className="title-profile">
                        <span>MAKERTING</span>
                        <i
                          className="mdi mdi-eye"
                          style={{ padding: 3 }}
                        />
                      </div> */}
                      {/* <div className="keyword-profile">
                        <span className="keyword-item">
                          MARTECH
                        </span>
                        <span className="keyword-item">
                          PR TECH
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-lg-8 col-xl-8 mx-auto" style={{}}>
                  <div
                    style={{
                      paddingTop: 20,
                      paddingLeft: 30,
                      display: 'flex',
                    }}
                  >
                    <div className="col-md-5 col-lg-5 col-xl-5">
                      <div>
                        <span style={{ width: '50%' }}>Last Raise</span>
                        <span className="col-sm-4">Jan 2019</span>
                      </div>
                      <div>
                        <span style={{ width: '50%' }}>Round</span>
                        <span className="col-sm-4">Series C</span>
                      </div>
                      <div>
                        <span style={{ width: '50%' }}>Round</span>
                        <span className="col-sm-4">Series C</span>
                      </div>
                    </div>
                    <div
                      className="col-md-5 col-lg-5 col-xl-5"
                      style={{ background: 'yellow' }}
                    >
                      <span className="col-md-5 col-lg-5 col-xl-5">Round</span>
                      <span className="col-sm-4">Series C</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-1 col-lg-1 col-xl-1 ml-auto"
                  style={{ background: 'yellow' }}
                >
                  <div className="">yellow</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-12 col-lg-12 col-xl-12"
            style={{ padding: 20 }}
          >
            Group Button
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <div className="card m-b-30">
              <div className="card-body">
                <div id="multi-line-chart" style={{ height: 200 }}>
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
                <div id="multi-line-chart" style={{ height: 200 }}>
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
    );
  }
}

ProfileContent.propTypes = {};

export default ProfileContent;
