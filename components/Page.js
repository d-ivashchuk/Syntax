import React from "react";
import Meta from "../components/meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
