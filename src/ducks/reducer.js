const initialState = {
  name: "Chris",
  allResults: []
};

const UPDATE_ALL_RESULTS = "UPDATE_ALL_RESULTS";

export function updateAllResults(results) {
  return {
    type: UPDATE_ALL_RESULTS,
    payload: results
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_RESULTS:
      return Object.assign({}, state, {allResults:action.payload})
    default:
      return state;
  }
}
