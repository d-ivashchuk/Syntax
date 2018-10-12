import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class Page extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="page">
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
