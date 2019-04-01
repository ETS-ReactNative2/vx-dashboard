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

// eslint-disable-next-line react/prefer-stateless-function
class VerticalChart extends Component {
  onSelectButton = () => {
    console.log('onSelectButton');
  };

  render() {
    return (
      <div className="card m-b-30">
        <div className="card-body">
          <div className="col-md-11 col-lg-11 col-xl-11 mx-auto">
            <div
              className="btn-group mo-mb-2"
              style={{
                paddingBottom: 50,
                paddingRight: 20,
              }}
            >
              <button
                className="btn btn-drd btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PR Tech
              </button>
              <div className="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Another action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Something else here
                </button>
                <div className="dropdown-divider" />
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Separated link
                </button>
              </div>
            </div>
            <div
              className="btn-group mo-mb-2"
              style={{
                paddingBottom: 50,
                paddingRight: 20,
              }}
            >
              <button
                className="btn btn-drd btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Industry Growth
              </button>
              <div className="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Another action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Something else here
                </button>
                <div className="dropdown-divider" />
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Separated link
                </button>
              </div>
            </div>

            <div
              className="btn-group mo-mb-2"
              style={{
                paddingBottom: 50,
                paddingRight: 20,
                float: 'right',
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
                  onClick={this.onSelectButton}
                >
                  Action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Another action
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Something else here
                </button>
                <div className="dropdown-divider" />
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={this.onSelectButton}
                >
                  Separated link
                </button>
              </div>
            </div>
          </div>

          <div style={{ width: '100%', height: 400 }} className="chart-colum">
            <ResponsiveContainer>
              <LineChart
                data={dataChart.data5}
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
                  dataKey="uv"
                  stroke="#0061c1"
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

VerticalChart.propTypes = {};

export default VerticalChart;
