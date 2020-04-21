import React, { Component } from "react";
import "./CovidCases.css";
import { connect } from "react-redux";
import { getCovids } from "../../actions/CovidAction";

import CovidCase from "./CovidCase";

class CovidCases extends Component {
  componentDidMount() {
    this.props.getCovids();
  }

  render() {
    const { covidCases } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-info">COVID19</span> Cases
        </h1>
        <table className="table table-striped table-dark covid-table">
          <thead>
            <tr>
              <th scope="col">Contry Code</th>
              <th scope="col">Country</th>
              <th scope="col">Total Conformed</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">Total Recovered</th>
              <th scope="col">New Conformed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">New Recovered</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {covidCases.map((covidCase) => (
              <CovidCase key={covidCase.CountryCode} covidCase={covidCase} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  covidCases: state.covid.covidCases,
});

export default connect(mapStateToProps, { getCovids })(CovidCases);
