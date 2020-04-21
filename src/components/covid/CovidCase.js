import React, { Component } from "react";

class CovidCase extends Component {
  render() {
    const {
      Country,
      CountryCode,
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
      Date,
    } = this.props.covidCase;
    console.log(this.props.covidCase);

    return (
      <tr>
        <th scope="row">{CountryCode}</th>
        <td>{Country}</td>
        <td>{TotalConfirmed} </td>
        <td>{TotalDeaths} </td>
        <td>{TotalRecovered} </td>
        <td>{NewConfirmed} </td>
        <td>{NewDeaths} </td>
        <td>{NewRecovered} </td>
        <td>{Date}</td>
      </tr>
    );
  }
}

export default CovidCase;
