import { INCREMENT_COUNTER } from "../../../constants/actionTypes/example";

export const incrementCounterAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload
})