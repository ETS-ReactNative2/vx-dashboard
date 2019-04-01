/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Employee extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-lg-6 col-xl-3" style={{ padding: 5 }}>
          <div className="card" style={{ height: 210 }}>
            <div className="card-body" style={{ margin: 'auto' }}>
              <img
                style={{
                  width: 110,
                }}
                src="assets/images/avatar-test.png"
                alt="user"
                className="rounded-circle"
              />
            </div>
            <div className="title-employee">Torsten Paulsson</div>
            <div className="title-position" style={{ margin: 'auto' }}>
              CEO - Founder
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3" style={{ padding: 5 }}>
          <div className="card" style={{ height: 210 }}>
            <div className="card-body" style={{ margin: 'auto' }}>
              <img
                style={{
                  width: 110,
                }}
                src="assets/images/avatar-test.png"
                alt="user"
                className="rounded-circle"
              />
            </div>
            <div className="title-employee">Sunstra Maneerattana</div>
            <div className="title-position" style={{ margin: 'auto' }}>
              Sr. Studio Specialist - Concept Devlopment
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3" style={{ padding: 5 }}>
          <div className="card" style={{ height: 210 }}>
            <div className="card-body" style={{ margin: 'auto' }}>
              <img
                style={{
                  width: 110,
                }}
                src="assets/images/avatar-test.png"
                alt="user"
                className="rounded-circle"
              />
            </div>
            <div className="title-employee">Anaru Hakopa</div>
            <div className="title-position" style={{ margin: 'auto' }}>
              Engineering, design, technology
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3" style={{ padding: 5 }}>
          <div className="card" style={{ height: 210 }}>
            <div className="card-body" style={{ margin: 'auto' }}>
              <img
                style={{
                  width: 110,
                }}
                src="assets/images/avatar-test.png"
                alt="user"
                className="rounded-circle"
              />
            </div>
            <div className="title-employee">Torsten Paulsson</div>
            <div className="title-position" style={{ margin: 'auto' }}>
              CEO - Founder
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Employee.propTypes = {};

export default Employee;
