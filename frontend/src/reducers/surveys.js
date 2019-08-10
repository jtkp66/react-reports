import { GET_SURVEYS } from "../actions/types.js";

const initialState = {
  surveys: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SURVEYS:
      return {
        ...state,
        surveys: action.payload
      };
    default:
      return state;
  }
}
