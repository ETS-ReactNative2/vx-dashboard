import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">© 2018 Annex by Mannatthemes.</div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
