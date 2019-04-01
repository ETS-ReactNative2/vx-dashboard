/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import GroupTitle from './GroupTitle';

// eslint-disable-next-line react/prefer-stateless-function
class FlowingVertical extends Component {
  renderContent = (isGrowth = false) => (
    <div style={{ borderBottom: '1px solid #dee2e6' }}>
      <div style={{ float: 'right', padding: 30 }}>
        <div
          style={{
            marginRight: 5,
            width: 70,
            display: 'flex',
            border: '1px solid #dee2e6',
            borderRadius: 5,
            background: isGrowth ? '#DBEADA' : '#F4E9E9',
          }}
        >
          <i
            className={
              isGrowth
                ? 'ion-arrow-graph-up-right'
                : 'ion-arrow-graph-down-right'
            }
            style={{
              fontSize: 20,
              paddingRight: 5,
              paddingLeft: 5,
              color: isGrowth ? '#39C65E' : '#F02B2B',
            }}
          />
          <span style={{ color: isGrowth ? '#39C65E' : '#F02B2B' }}>10%</span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div>
          <div style={{ color: '#0061c1' }}>PR Tech</div>
          <div style={{ color: '#61686f', fontWeight: 'normal' }}>
            1.354 Companies
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="card m-b-30">
        <div className="card-body">
          <GroupTitle title="Vertical Trends" isEdit />

          <div
            className="col-md-11 col-lg-11 col-xl-11 mx-auto"
            style={{ height: 435 }}
          >
            {this.renderContent(true)}
            {this.renderContent(false)}
            {this.renderContent(false)}
            {this.renderContent(true)}
          </div>
        </div>
      </div>
    );
  }
}

FlowingVertical.propTypes = {};

export default FlowingVertical;
