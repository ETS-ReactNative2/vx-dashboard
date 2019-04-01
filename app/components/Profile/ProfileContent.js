/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Label } from 'reactstrap';

// eslint-disable-next-line react/prefer-stateless-function
class ProfileContent extends Component {
  render() {
    return (
      <div className="col-md-12 col-lg-12 col-xl-12">
        <div className="card m-b-30">
          <div className="d-flex card-body" style={{ height: 190 }}>
            <div
              className="col-md-3 col-lg-3 col-xl-3 mx-atuo"
              style={{
                display: 'flex',
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
              <div
                className="col-md-10 col-lg-10 col-xl-10"
                style={{ paddingRight: 5 }}
              >
                <div style={{ paddingTop: 20 }}>
                  <span className="profile-name">
                    Ozmotik
                    <i className="mdi mdi-star" style={{ color: '#E3DC01' }} />
                  </span>
                  <div className="">
                    <i className="ti-location-pin" />
                    New York, NY
                  </div>
                  <span className="item-makerting">
                    MAKERTING
                    <i className="mdi mdi-eye" style={{ padding: 3 }} />
                  </span>

                  <div className="keyword-profile">
                    <Label className="item-keyword">MARTECH</Label>
                    <Label className="item-keyword">PR TECH</Label>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-8 col-lg-8 col-xl-8 mx-auto"
              style={{ paddingRight: 0 }}
            >
              <div
                style={{
                  paddingTop: 10,
                  paddingLeft: 30,
                  display: 'flex',
                }}
              >
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Last Raise
                    </Label>
                    <span className="item-label">Jan 2019</span>
                  </div>
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Round
                    </Label>
                    <span className="item-label">Series C</span>
                  </div>
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Total Raised
                    </Label>
                    <span className="item-label">$56MM</span>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Revenue
                    </Label>
                    <span className="item-label">$250MM</span>
                  </div>
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Headcount
                    </Label>
                    <span className="item-label">120</span>
                  </div>
                  <div>
                    <Label
                      sm={7}
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        fontSize: 14,
                        fontWeight: 'normal',
                        color: '#7c8894',
                      }}
                    >
                      Investor
                    </Label>
                    <span className="item-label">Wildcat...</span>
                  </div>
                </div>
                <div
                  className="col-md-2 col-lg-2 col-xl-2"
                  style={{ paddingRight: 0, paddingLeft: 0, marginTop: 0 }}
                >
                  <img
                    src="assets/images/image-growth.png"
                    alt="user"
                    style={{ width: '60%' }}
                  />
                  <span
                    style={{
                      paddingRight: 10,
                      borderRight: '1px solid #c5c6cd',
                      color: 'rgb(57, 198, 94)',
                    }}
                  >
                    9
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-1 col-lg-1 col-xl-1 ml-auto"
              style={{
                background: '',
                paddingRight: 0,
                paddingLeft: 0,
              }}
            >
              <div className="" style={{ marginTop: 10 }}>
                <i
                  className="ion-plus"
                  style={{
                    padding: 3,
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontSize: 20,
                    background: '#b9c7d5',
                    color: '#0061c1',
                  }}
                />
                <i
                  className="large mdi mdi-dots-vertical"
                  style={{
                    padding: 3,
                    float: 'right',
                    fontSize: 20,
                    color: '#b9c7d5',
                  }}
                />
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
