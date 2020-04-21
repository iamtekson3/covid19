import React, { Component } from "react";
// import axios from "axios";

class CovidCase extends Component {
  render() {
    // const res = axios
    //   .get("https://api.covid19api.com/summary")
    //   .then((data) => console.log(data));

    const {
      Country,
      CountryCode,
      NewConformed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
      Date,
    } = this.props.covidCase;

    return (
      <tr>
        <th scope="row">{CountryCode}</th>
        <td>{Country}</td>
        <td>{NewConformed} </td>
        <td>{TotalConfirmed} </td>
        <td>{NewDeaths} </td>
        <td>{TotalDeaths} </td>
        <td>{NewRecovered} </td>
        <td>{TotalRecovered} </td>
        <td>{Date}</td>
      </tr>
    );
  }
}

export default CovidCase;
