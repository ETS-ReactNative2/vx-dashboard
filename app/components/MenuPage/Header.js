import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  render() {
    return (
      <header id="topnav">
        <div className="topbar-main">
          <div className="container-fluid">
            <div className="logo">
              <a href="index.html" className="logo">
                <img
                  src="assets/images/logo-sm.png"
                  alt=""
                  height="22"
                  className="logo-small"
                />
                <img
                  src="assets/images/logo.png"
                  alt=""
                  height="16"
                  className="logo-large"
                />
              </a>
            </div>
            <div className="menu-extras topbar-custom">
              <ul className="list-inline float-right mb-0">
                <li className="list-inline-item dropdown notification-list hide-phone">
                  <a
                    className="nav-link dropdown-toggle arrow-none waves-effect"
                    data-toggle="dropdown"
                    href="index.html"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    English
                    <img
                      src="assets/images/flags/us_flag.jpg"
                      className="ml-2"
                      height="16"
                      alt=""
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right language-switch">
                    <a className="dropdown-item" href="index.html">
                      <img
                        src="assets/images/flags/italy_flag.jpg"
                        alt=""
                        height="16"
                      />
                      <span> Italian </span>
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <img
                        src="assets/images/flags/french_flag.jpg"
                        alt=""
                        height="16"
                      />
                      <span> French </span>
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <img
                        src="assets/images/flags/spain_flag.jpg"
                        alt=""
                        height="16"
                      />
                      <span> Spanish </span>
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <img
                        src="assets/images/flags/russia_flag.jpg"
                        alt=""
                        height="16"
                      />
                      <span> Russian </span>
                    </a>
                  </div>
                </li>
                <li className="list-inline-item dropdown notification-list">
                  <a
                    className="nav-link dropdown-toggle arrow-none waves-effect"
                    data-toggle="dropdown"
                    href="index.html"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-bell-outline noti-icon" />
                    <span className="badge badge-success noti-icon-badge">
                      21
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                    <div className="dropdown-item noti-title">
                      <h5>Notification (3)</h5>
                    </div>

                    <a href="index.html" className="dropdown-item notify-item">
                      <div className="notify-icon bg-success">
                        <i className="mdi mdi-cart-outline" />
                      </div>
                      <p className="notify-details">
                        <b>Your order is placed</b>
                        <small className="text-muted">
                          Dummy text of the printing and typesetting industry.
                        </small>
                      </p>
                    </a>

                    <a href="index.html" className="dropdown-item notify-item">
                      <div className="notify-icon bg-warning">
                        <i className="mdi mdi-message" />
                      </div>
                      <p className="notify-details">
                        <b>New Message received</b>
                        <small className="text-muted">
                          You have 87 unread messages
                        </small>
                      </p>
                    </a>

                    <a href="index.html" className="dropdown-item notify-item">
                      <div className="notify-icon bg-info">
                        <i className="mdi mdi-martini" />
                      </div>
                      <p className="notify-details">
                        <b>Your item is shipped</b>
                        <small className="text-muted">
                          It is a long established fact that a reader will
                        </small>
                      </p>
                    </a>

                    <a href="index.html" className="dropdown-item notify-item">
                      View All
                    </a>
                  </div>
                </li>
                <li className="list-inline-item dropdown notification-list">
                  <a
                    className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                    data-toggle="dropdown"
                    href="index.html"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      alt="user"
                      className="rounded-circle"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <div className="dropdown-item noti-title">
                      <h5>Welcome</h5>
                    </div>
                    <a className="dropdown-item" href="index.html">
                      <i className="mdi mdi-account-circle m-r-5 text-muted" />{' '}
                      Profile
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <i className="mdi mdi-wallet m-r-5 text-muted" /> My
                      Wallet
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <span className="badge badge-success float-right">5</span>
                      <i className="mdi mdi-settings m-r-5 text-muted" />{' '}
                      Settings
                    </a>
                    <a className="dropdown-item" href="index.html">
                      <i className="mdi mdi-lock-open-outline m-r-5 text-muted" />{' '}
                      Lock screen
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="index.html">
                      <i className="mdi mdi-logout m-r-5 text-muted" /> Logout
                    </a>
                  </div>
                </li>
                <li className="menu-item list-inline-item">
                  <a className="navbar-toggle nav-link">
                    <div className="lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="navbar-custom">
          <div className="container-fluid">
            <div id="navigation">
              <ul className="navigation-menu">
                <li className="has-submenu app-search">
                  <form role="search" className="search-input">
                    <input type="text" placeholder="Search..." className="" />

                    <i className="fa fa-search" style={{ margin: 'auto' }} />
                  </form>
                </li>
                <li className="has-submenu">
                  <a href="index.html">
                    <i className="mdi mdi-airplay" />
                    Dashboard
                  </a>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="mdi mdi-layers" />
                    Advanced UI
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="advanced-highlight.html">Highlight</a>
                    </li>
                    <li>
                      <a href="advanced-rating.html">Rating</a>
                    </li>
                    <li>
                      <a href="advanced-alertify.html">Alertify</a>
                    </li>
                    <li>
                      <a href="advanced-rangeslider.html">Range Slider</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">
                    <i className="mdi mdi-bullseye" />
                    User Interface
                  </a>
                  <ul className="submenu megamenu">
                    <li>
                      <ul>
                        <li>
                          <a href="ui-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="ui-cards.html">Cards</a>
                        </li>
                        <li>
                          <a href="ui-tabs-accordions.html">
                            Tabs &amp; Accordions
                          </a>
                        </li>
                        <li>
                          <a href="ui-modals.html">Modals</a>
                        </li>
                        <li>
                          <a href="ui-images.html">Images</a>
                        </li>
                        <li>
                          <a href="ui-alerts.html">Alerts</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="ui-progressbars.html">Progress Bars</a>
                        </li>
                        <li>
                          <a href="ui-dropdowns.html">Dropdowns</a>
                        </li>
                        <li>
                          <a href="ui-lightbox.html">Lightbox</a>
                        </li>
                        <li>
                          <a href="ui-navs.html">Navs</a>
                        </li>
                        <li>
                          <a href="ui-pagination.html">Pagination</a>
                        </li>
                        <li>
                          <a href="ui-popover-tooltips.html">
                            Popover & Tooltips
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li>
                          <a href="ui-badge.html">Badge</a>
                        </li>
                        <li>
                          <a href="ui-carousel.html">Carousel</a>
                        </li>
                        <li>
                          <a href="ui-video.html">Video</a>
                        </li>
                        <li>
                          <a href="ui-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="ui-sweet-alert.html">Sweet-Alert</a>
                        </li>
                        <li>
                          <a href="ui-grid.html">Grid</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
