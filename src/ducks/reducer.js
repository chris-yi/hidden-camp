import axios from "axios";

const initialState = {
  listingID: null,
  allListings: [],
  hostListings: [],
  requests: [],
  trips: [],
  user: {}
};

const GET_ALL_LISTINGS = "GET_ALL_LISTINGS";
const GET_HOST_LISTINGS = "GET_HOST_LISTINGS";
const GET_REQUESTS = "GET_REQUESTS";
const GET_TRIPS = "GET_TRIPS";
const GET_ALL_MOUNTAINS = "GET_ALL_MOUNTAINS";
const GET_ALL_OCEANFRONT = "GET_ALL_OCEANFRONT";
const GET_ALL_LAKEVIEW = "GET_ALL_LAKEVIEW";
const GET_ALL_FOREST = "GET_ALL_FOREST";
const GET_ALL_UNDER_THE_STARS = "GET_ALL_UNDER_THE_STARS";
const GET_UNIQUE_HIDEAWAYS = "GET_UNIQUE_HIDEAWAYS";
const UPDATE_LISTING_ID = "UPDATE_LISTING_ID";
const GET_CITY_LISTINGS = "GET_CITY_LISTINGS";
const GET_USER_INFO = "GET_USER_INFO";

// Get user info

export function getUserInfo() {
  const user = axios.get("/auth/me").then(res => res.data);
  return {
    type: GET_USER_INFO,
    payload: user
  };
}

// Get all initial listings
export function getListings(listings) {
  return {
    type: GET_ALL_LISTINGS,
    payload: listings
  };
}

export function getHostListings(listings) {
  return {
    type: GET_HOST_LISTINGS,
    payload: listings
  };
}

export function getRequests(listings) {
  return {
    type: GET_REQUESTS,
    payload: listings
  };
}

export function getTrips(listings) {
  return {
    type: GET_TRIPS,
    payload: listings
  };
}

export function getMountainsListings(listings) {
  return {
    type: GET_ALL_MOUNTAINS,
    payload: listings
  };
}

export function getOceanfrontListings(listings) {
  return {
    type: GET_ALL_OCEANFRONT,
    payload: listings
  };
}

export function getLakeviewListings(listings) {
  return {
    type: GET_ALL_LAKEVIEW,
    payload: listings
  };
}

export function getForestListings(listings) {
  return {
    type: GET_ALL_FOREST,
    payload: listings
  };
}

export function getUnderTheStarsListings(listings) {
  return {
    type: GET_ALL_UNDER_THE_STARS,
    payload: listings
  };
}

export function getUniqueHideawaysListings(listings) {
  return {
    type: GET_UNIQUE_HIDEAWAYS,
    payload: listings
  };
}

export function getCityListings(listings) {
  return {
    type: GET_CITY_LISTINGS,
    payload: listings
  };
}

export function updateListingID(id) {
  return {
    type: UPDATE_LISTING_ID,
    payload: id
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // USE BELOW TO DISPLAY RESULTS ON SAME PAGE
    // case GET_ALL_LISTINGS + "_FULFILLED":
    //   return Object.assign({}, state, {allListings:action.payload})

    case GET_ALL_LISTINGS:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_HOST_LISTINGS:
      return Object.assign({}, state, { hostListings: action.payload });
    case GET_REQUESTS:
      return Object.assign({}, state, { requests: action.payload });
    case GET_TRIPS:
      return Object.assign({}, state, { trips: action.payload });
    case GET_ALL_MOUNTAINS:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_ALL_OCEANFRONT:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_ALL_LAKEVIEW:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_ALL_FOREST:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_ALL_UNDER_THE_STARS:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_UNIQUE_HIDEAWAYS:
      return Object.assign({}, state, { allListings: action.payload });
    case UPDATE_LISTING_ID:
      return Object.assign({}, state, { listingID: action.payload });
    case GET_CITY_LISTINGS:
      return Object.assign({}, state, { allListings: action.payload });
    case GET_USER_INFO + "_FULFILLED":
      return Object.assign({}, state, { user: action.payload });
    default:
      return state;
  }
}
