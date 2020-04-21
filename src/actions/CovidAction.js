import { GET_COVIDS } from "./type";
import axios from "axios";

export const getCovids = () => async (dispatch) => {
  const res = await axios.get("https://api.covid19api.com/summary");
  const data = res.data.Countries;
  dispatch({
    type: GET_COVIDS,
    payload: data,
  });
};
