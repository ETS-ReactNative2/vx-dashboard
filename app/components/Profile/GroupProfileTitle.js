/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class GroupProfileTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <div
        className="col-md-12 col-lg-12 col-xl-12"
        style={{ padding: 0, color: '#61686f' }}
      >
        <Label className="label-title">{title}</Label>
      </div>
    );
  }
}

GroupProfileTitle.propTypes = {
  title: PropTypes.string,
};

export default GroupProfileTitle;
