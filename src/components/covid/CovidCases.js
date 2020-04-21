import React, { Component } from "react";
// import axios from "axios";

import CovidCase from "./CovidCase";

class CovidCases extends Component {
  state = {
    covidCases: [
      {
        Country: "ALA Aland Islands",
        CountryCode: "AX",
        Slug: "ala-aland-islands",
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: "2020-04-20T09:35:20Z",
      },
      {
        Country: "Afghanistan",
        CountryCode: "AF",
        Slug: "afghanistan",
        NewConfirmed: 63,
        TotalConfirmed: 996,
        NewDeaths: 3,
        TotalDeaths: 33,
        NewRecovered: 19,
        TotalRecovered: 131,
        Date: "2020-04-20T09:35:20Z",
      },
      {
        Country: "Albania",
        CountryCode: "AL",
        Slug: "albania",
        NewConfirmed: 14,
        TotalConfirmed: 562,
        NewDeaths: 0,
        TotalDeaths: 26,
        NewRecovered: 12,
        TotalRecovered: 314,
        Date: "2020-04-20T09:35:20Z",
      },
    ],
  };
  render() {
    const { covidCases } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-info">COVID19</span> Cases
        </h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Contry Code</th>
              <th scope="col">Country</th>
              <th scope="col">New Conformed</th>
              <th scope="col">Total Conformed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">New Recovered</th>
              <th scope="col">Total Recovered</th>
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

export default CovidCases;
