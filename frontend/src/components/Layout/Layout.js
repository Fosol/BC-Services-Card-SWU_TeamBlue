import React from 'react';
import PropTypes from 'prop-types';

// external-global styles must be imported in your JS.
import './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="root">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
