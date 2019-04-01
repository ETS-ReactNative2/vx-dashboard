import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function

const Header = [
  {
    key: 'company',
    value: 'COMPANY',
  },
  {
    key: 'lastFunding',
    value: 'LAST FUNDING',
  },
  {
    key: 'round',
    value: 'ROUND',
  },
  {
    key: 'totalRaised',
    value: 'TOTAL RAISED',
  },
  {
    key: 'EMPLOYESS',
    value: '#EMPLOYESS',
  },
  {
    key: 'VERTICAL',
    value: 'VERTICAL',
  },
  {
    key: 'GROWTH FACTOR',
    value: 'GROWTH FACTOR',
  },
  {
    key: 'profile',
    value: '',
  },
  {
    key: 'add',
    value: '',
  },
  {
    key: 'details',
    value: '',
  },
];

const body = [
  {
    key: '1',
    selected: false,
    company: 'Ozmotik',
    lastFunding: 'Mar 2017',
    round: 'A',
    totalRaised: '1000',
    employess: '100',
    vertical: 'PR Tech',
    growthFactory: 9,
  },
  {
    key: '2',
    selected: true,
    company: 'Ozmotik',
    lastFunding: 'Mar 2017',
    round: 'A',
    totalRaised: '1000',
    employess: '100',
    vertical: 'PR Tech',
    growthFactory: 9,
  },
];

class TableSptlightCompanies extends Component {
  renderHeader = header => (
    <th
      key={header.key}
      nowrap="nowrap"
      className="border-top-0 border-bottom-0"
      style={{ color: '#61686f', fontWeight: 'none' }}
    >
      {header.value}
    </th>
  );

  renderBody = item => (
    <tr key={item.key}>
      <td>
        <div
          style={{
            display: 'flex',
            width: 150,
          }}
        >
          <i
            className={item.selected ? 'mdi mdi-star' : 'mdi mdi-star-outline'}
            style={{ color: '#E3DC01', fontSize: 25, paddingTop: 5 }}
          />
          <img
            style={{
              width: 35,
              height: 35,
              marginLeft: 10,
              marginRight: 10,
            }}
            src="assets/images/users/avatar-1.jpg"
            alt="user"
            className="rounded-circle"
          />
          <span style={{ paddingTop: 8, fontSize: 17, color: '#0061c1' }}>
            {item.company}
          </span>
        </div>
      </td>
      <td>{item.lastFunding}</td>
      <td>{item.round}</td>
      <td>{item.totalRaised}</td>
      <td>{item.employess}</td>
      <td>{item.vertical}</td>
      <td>
        <div
          style={{
            marginRight: 5,
            display: 'flex',
          }}
        >
          <img
            style={{
              width: 50,
            }}
            src="assets/images/image-growth.png"
            alt="user"
          />
          <span>9</span>
        </div>
      </td>
      <td>
        <Link to="/profile">
          <button type="button" className="btn btn-outline-primary">
            View Profile
          </button>
        </Link>
      </td>
      <td>
        <button type="button" className="btn">
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
        </button>
      </td>
      <td>
        <button type="button" className="btn">
          <i
            className="large mdi mdi-dots-vertical"
            style={{
              padding: 3,
              float: 'right',
              fontSize: 20,
              color: '#b9c7d5',
            }}
          />
        </button>
      </td>
    </tr>
  );

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <div className="card m-b-30">
            <div className="card-body table-responsive">
              <div className="">
                <table id="datatable" className="table table-hover">
                  <thead>
                    <tr>{Header.map(item => this.renderHeader(item))}</tr>
                  </thead>
                  <tbody>{body.map(item => this.renderBody(item))}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TableSptlightCompanies.propTypes = {};

export default TableSptlightCompanies;
