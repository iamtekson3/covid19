import { GET_COVIDS } from "../actions/type";

const initialState = {
  covidCases: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COVIDS:
      return {
        ...state,
        covidCases: action.payload,
      };

    default:
      return state;
  }
}
