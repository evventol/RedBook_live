import { INCREMENT_COUNTER } from "../../../constants/actionTypes/example";

const initialState = {
  count: 0,
};

export const example = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
