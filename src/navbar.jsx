import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <span id="logo" onClick={() => this.props.closeDetail()}>DITTO</span>
      </div>
    );
  }
}

export default Navbar;