import React from 'react';
import Meta from './meta';
import Header from './Header';
import Footer from './Footer';

export default class Page extends React.Component {
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
