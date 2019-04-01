/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Chart } from 'react-charts';
import { dataChart, urlImage } from 'constantsApp';

// eslint-disable-next-line react/prefer-stateless-function
class ProfileContentFixed extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-12 col-xl-12">
        <div className="card m-b-30">
          <div className="d-flex flex-row card-body" style={{ height: 190 }}>
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
                    <i className="mdi mdi-star" style={{ color: '#E3DC01' }} />
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
                    <label
                      htmlFor="example-text-input"
                      className="col-sm-2 col-form-label"
                    >
                      Text
                    </label>
                    <span className="col-sm-4">Jan 2019</span>
                  </div>
                  <div>
                    <label
                      htmlFor="example-text-input"
                      className="col-sm-2 col-form-label"
                    >
                      Text
                    </label>
                    <span className="col-sm-4">Series C</span>
                  </div>
                  <div>
                    <span>Round</span>
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
    );
  }
}

ProfileContentFixed.propTypes = {};

export default ProfileContentFixed;
