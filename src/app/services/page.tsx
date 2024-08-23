import React from "react";
import "./services.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
const Services = () => {
  return (
    <>
    <Header />
    <div className="ser-container">
      <h1 className="head">Services</h1>
      <div className="card">
        <div className="sub-card">
          <h1 className="hea">Real-Time Pricing</h1>
          <p>
            We provide real-time pricing information on a wide range of
            petrochemicals, updated continuously to reflect market changes. Our
            pricing data is sourced from the most reliable and authoritative
            industry sources, ensuring accuracy and reliability.
          </p>
        </div>
        <div className="sub-card">
          <h1 className="hea">Market Analysis</h1>
          <p>
            Our team of experts provide comprehensive market analysis, offering
            insights into key trends and drivers shaping the industry. Our
            analysis is informed by the latest data and research, and is
            designed to help you make informed decisions.
          </p>
        </div>
        <div className="sub-card">
          <h1 className="hea">Industry Reports</h1>
          <p>
            We produce detailed industry reports, covering a wide range of
            petrochemicals and applications. Our reports provide in-depth
            analysis of key industry trends, as well as emerging opportunities
            and challenges.
          </p>
        </div>
        <div className="sub-card">
          <h1 className="hea">News and Data</h1>
          <p>
            Our website features the latest news and data on petrochemicals,
            sourced from the most reliable and authoritative industry sources.
            We cover all aspects of the industry, from production and supply to
            demand and consumption.
          </p>
        </div>
        <div className="sub-card">
          <h1 className="hea">Data Visualization</h1>
          <p>
            We provide data visualization tools, allowing you to easily
            interpret and analyze complex data sets. Our tools enable you to
            identify patterns and trends, and to share your insights with
            others.
          </p>
        </div>
        <div className="sub-card">
          <h1 className="hea">Customized Solutions</h1>
          <p>
            We offer customized solutions tailored to meet your specific needs.
            Our team of experts work with you to develop a comprehensive
            understanding of your requirements, and to provide tailored
            solutions that deliver maximum value.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Services;
