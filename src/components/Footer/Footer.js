import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="full-width-footer">
        <div className="pull-right">
            <b>Version</b> 1.0.0
        </div>
        <strong>&copy; 2017 <a href="http://www.lease-analytics.com/" target="_blank">Lease Analytics LLC</a>.</strong> Proprietary & Confidential. All Rights Reserved.
    </footer>
    )
  }
}

export default Footer;