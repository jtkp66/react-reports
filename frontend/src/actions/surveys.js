import axios from "axios";

import { GET_SURVEYS } from "./types";

// GET SURVEYS
export const getSurveys = () => dispatch => {
  axios
    .get("/api/surveys/")
    .then(res => {
      dispatch({
        type: GET_SURVEYS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
