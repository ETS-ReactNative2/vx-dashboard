/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
// import { Chart } from 'react-charts';
import { dataChart, urlImage } from 'constantsApp';
import { Label } from 'reactstrap';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import ProfileContent from './ProfileContent';
import GroupProfileTitle from './GroupProfileTitle';
import Employee from './Employee';
import Compare from './Compare';
import Competitors from './Competitors';
import CompetitiveGrowth from './CompetitiveGrowth';
import CompanyNews from './CompanyNews';
import CompetitorsNews from './CompetitorsNews';
import Tags from './Tags';
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
                      <a href="#">OPTYX</a>
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
                    <div className="col-sm-12 profile-info">
                      <div className="row">
                        <ProfileContent />
                        <Tags />
                        <GroupProfileTitle title="Insights" />
                        <div className="col-md-12 col-lg-12 col-xl-6">
                          <div className="card m-b-30">
                            <div className="card-body">
                              <div
                                style={{ width: '100%', height: 200 }}
                                className="chart-content"
                              >
                                <Label className="item-label">
                                  Employee Growth
                                </Label>
                                <ResponsiveContainer>
                                  <LineChart
                                    data={dataChart.data2}
                                    margin={{
                                      top: 10,
                                      right: 30,
                                      left: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                      strokeWidth={2}
                                      connectNulls
                                      type="monotone"
                                      dataKey="uv"
                                      stroke="#0061c1"
                                      fill="#fff"
                                    />
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-12 col-xl-6">
                          <div className="card m-b-30">
                            <div className="card-body">
                              <div
                                style={{ width: '100%', height: 200 }}
                                className="chart-content"
                              >
                                <Label className="item-label">
                                  Category Growth
                                </Label>
                                <ResponsiveContainer>
                                  <LineChart
                                    height={200}
                                    data={dataChart.data2}
                                    margin={{
                                      top: 10,
                                      right: 30,
                                      left: 0,
                                      bottom: 0,
                                    }}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                      strokeWidth={2}
                                      connectNulls
                                      type="monotone"
                                      dataKey="uv"
                                      stroke="#0061c1"
                                      fill="#fff"
                                    />
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end chart */}

                        <GroupProfileTitle title="Team" />
                        <div
                          className="col-md-12 col-lg-12 col-xl-12"
                          style={{ paddingBottom: 50 }}
                        >
                          <Employee />
                        </div>
                        {/* end Profile */}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-11 col-lg-11 col-xl-11 mx-auto row"
                  style={{ padding: 0 }}
                >
                  <CompanyNews />
                  <CompetitorsNews />
                </div>
                <div className="col-md-11 col-lg-11 col-xl-11 mx-auto">
                  <Compare />
                </div>
                <div
                  className="col-md-11 col-lg-11 col-xl-11 mx-auto row"
                  style={{ padding: 0 }}
                >
                  <div className="col-md-12 col-lg-12 col-xl-5">
                    <Competitors />
                  </div>
                  <div className="col-md-12 col-lg-12 col-xl-7">
                    <CompetitiveGrowth />
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
