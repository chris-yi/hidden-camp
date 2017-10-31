// import axios from "axios";

const initialState = {
  name: "Chris",
  allListings: []
};

const GET_ALL_LISTINGS = "GET_ALL_LISTINGS";

// export function getListings() {
//   const listing = axios.get("/api/listings").then(res => res.data);
//   return {
//     type: GET_ALL_LISTINGS,
//     payload: listing
//   }
// }

export function getListings(listings){
  return {
    type: GET_ALL_LISTINGS,
    payload: listings
  }
}


export default function reducer(state = initialState, action) {
  switch (action.type) {
    // USE BELOW TO DISPLAY RESULTS ON SAME PAGE 
    // case GET_ALL_LISTINGS + "_FULFILLED":
    //   return Object.assign({}, state, {allListings:action.payload})

    case GET_ALL_LISTINGS:
      return Object.assign({}, state, {allListings:action.payload})
    default:
      return state;
  }
}
