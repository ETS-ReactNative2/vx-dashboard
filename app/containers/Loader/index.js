import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import makeLoaderState from './selector';
import './styles.scss';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = { isConnecting: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isConnecting: false });
    }, 20);
  }

  render() {
    // const { isConnecting } = this.props;
    const { isConnecting } = this.state;

    if (!isConnecting) {
      return <div />;
    }

    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner" />
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  isConnecting: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isConnecting: makeLoaderState() || false,
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'loaderReducer', reducer });

export default compose(
  withReducer,
  withConnect,
)(Loader);
