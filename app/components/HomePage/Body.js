import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-charts';
import TableSptlightCompanies from './TableSptlightCompanies';
import GroupTitle from './GroupTitle';
import FlowingVertical from './FlowingVertical';
import VerticalChart from './VerticalChart';

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
                      <button type="button" style={{ color: '#707070' }}>
                        OPTYX
                      </button>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <GroupTitle title="Spotlight Companies" />
          <TableSptlightCompanies />
          <GroupTitle title="Vertical Trends" />
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-4">
              <FlowingVertical />
            </div>

            <div className="col-md-12 col-lg-12 col-xl-8">
              <VerticalChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Body.propTypes = {};

export default Body;
