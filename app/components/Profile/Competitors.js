/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import GroupProfileTitle from './GroupProfileTitle';

// eslint-disable-next-line react/prefer-stateless-function
class Competitors extends Component {
  renderContent = () => (
    <div style={{ borderBottom: '1px solid #dee2e6' }}>
      <div style={{ float: 'right', padding: 30 }}>
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
          <span style={{ color: 'rgb(57, 198, 94)' }}>9</span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <img
          style={{
            width: 45,
            height: 45,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
            float: 'left',
          }}
          src="assets/images/users/avatar-1.jpg"
          alt="user"
          className=""
        />
        <div>
          <div>DataSine</div>
          <div style={{ color: '#61686f' }}>datasine.com</div>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="card m-b-30">
        <div className="card-body">
          <GroupProfileTitle title="Competitors" />
          <div
            className="col-md-11 col-lg-11 col-xl-11 mx-auto"
            style={{ height: 420 }}
          >
            {this.renderContent()}
            {this.renderContent()}
            {this.renderContent()}
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

Competitors.propTypes = {};

export default Competitors;
