/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { dataChart } from 'constantsApp';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import GroupProfileTitle from './GroupProfileTitle';

// eslint-disable-next-line react/prefer-stateless-function
class CompetitiveGrowth extends Component {
  onSelectButton = () => {
    console.log('onSelectButton');
  };

  render() {
    return (
      <div className="card m-b-30">
        <div className="card-body competitive-growth">
          <GroupProfileTitle title="Competitive Growth" />
          <div className="col-md-11 col-lg-11 col-xl-11 mx-auto">
            <span
              style={{
                paddingRight: 10,
                color: 'rgb(97, 104, 111)',
                fontSize: 13,
              }}
            >
              <i
                className="ion-minus-round"
                style={{
                  fontSize: 15,
                  color: '#0061c1',
                  paddingRight: 3,
                }}
              />
              Ozmotik
            </span>
            <span
              style={{
                paddingRight: 10,
                color: 'rgb(97, 104, 111)',
                fontSize: 13,
              }}
            >
              <i
                className="ion-minus-round"
                style={{
                  fontSize: 15,
                  color: '#39C65E',
                  paddingRight: 3,
                }}
              />
              Cison
            </span>
            <span
              style={{
                paddingRight: 10,
                color: 'rgb(97, 104, 111)',
                fontSize: 13,
              }}
            >
              <i
                className="ion-minus-round"
                style={{
                  fontSize: 15,
                  color: '#D90871',
                  paddingRight: 3,
                }}
              />
              PX
            </span>
            <span
              style={{
                paddingRight: 10,
                color: 'rgb(97, 104, 111)',
                fontSize: 13,
              }}
            >
              <i
                className="ion-minus-round"
                style={{
                  fontSize: 15,
                  color: '#9B01BA',
                  paddingRight: 3,
                }}
              />
              Langt
            </span>

            <div
              className="btn-group mo-mb-2"
              style={{
                paddingRight: 10,
                float: 'right',
                zIndex: 1,
              }}
            >
              <button
                className="btn btn-drd btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Last Year
              </button>
              <div className="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => this.onSelectButton()}
                >
                  Action11
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => this.onSelectButton()}
                >
                  Action12
                </button>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: 400 }} className="chart-colum">
            <ResponsiveContainer>
              <LineChart
                data={dataChart.data4}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="pv"
                  stroke="#0061c1"
                  fill="#fff"
                  activeDot={{ r: 8 }}
                />
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="uv"
                  stroke="#39C65E"
                  fill="#fff"
                />
                <Line
                  strokeWidth={2}
                  type="monotone"
                  dataKey="amt"
                  stroke="#D90871"
                  fill="#fff"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

CompetitiveGrowth.propTypes = {};

export default CompetitiveGrowth;
