/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class GroupTitle extends Component {
  render() {
    const { title, isEdit = false } = this.props;
    return (
      <div
        className="col-md-12 col-lg-12 col-xl-12"
        style={{
          paddingBottom: 10,
          paddingLeft: 0,
          color: '#495057',
          fontSize: 20,
        }}
      >
        <Label className="label-title" style={{ fontWeight: 'normal' }}>
          {title}
        </Label>
        {isEdit && (
          <button
            type="button"
            className="btn"
            style={{
              float: 'right',
              textDecoration: 'underline',
              color: '#0061c1',
            }}
          >
            EDIT
          </button>
        )}
      </div>
    );
  }
}

GroupTitle.propTypes = {
  title: PropTypes.string,
};

export default GroupTitle;
