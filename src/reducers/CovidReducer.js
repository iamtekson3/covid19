import { GET_COVIDS } from "../actions/type";

const initialState = {
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

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COVIDS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}
