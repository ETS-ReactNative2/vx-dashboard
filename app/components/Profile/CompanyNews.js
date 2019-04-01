/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Label } from 'reactstrap';

// eslint-disable-next-line react/prefer-stateless-function
class CompanyNews extends Component {
  renderContent = () => (
    <div style={{ borderBottom: '1px solid #dee2e6' }}>
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
        }}
      >
        <img
          style={{
            width: 45,
            height: 45,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 10,
          }}
          src="assets/images/users/avatar-1.jpg"
          alt="user"
          className=""
        />
        <div>
          <div>Huawei founder...</div>
          <div style={{ color: '#61686f' }}>2/19/19</div>
        </div>
      </div>
      <div style={{ margin: 10, color: '#61686f' }}>Huawei...</div>
    </div>
  );

  render() {
    return (
      <div className="col-md-12 col-lg-12 col-xl-6">
        <div className="card m-b-30">
          <div className="card-body">
            <div>
              <div>
                <Label className="item-label" style={{ color: '#61686f' }}>
                  Company News
                </Label>
                <button
                  type="button"
                  className="btn"
                  style={{
                    float: 'right',
                    textDecoration: 'underline',
                    color: '#0061c1',
                  }}
                >
                  View More
                </button>
              </div>
              {this.renderContent()}
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CompanyNews.propTypes = {};

export default CompanyNews;
