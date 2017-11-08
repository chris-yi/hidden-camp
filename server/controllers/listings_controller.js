module.exports = {
  // ***** HOST ***** //
  // Create a new listing
  createListing: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      host_id,
      listing_name,
      address,
      city,
      state,
      zip,
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      fires,
      potable_water,
      pets,
      toilets,
      trash,
      showers,
      wifi,
      max_campers,
      price_per_night,
      min_night_stay,
      check_in_time,
      check_out_time,
      description,
      category
    } = req.body;

    dbInstance
      .create_listing([
        host_id,
        listing_name,
        address,
        city,
        state,
        zip,
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        fires,
        potable_water,
        pets,
        toilets,
        trash,
        showers,
        wifi,
        max_campers,
        price_per_night,
        min_night_stay,
        check_in_time,
        check_out_time,
        description,
        category
      ])
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  },

  createBooking: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const {
      user_id,
      listing_id,
      check_in_date,
      check_out_date,
      total_cost,
      host_id
    } = req.body;
    dbInstance
      .create_booking([
        user_id,
        listing_id,
        check_in_date,
        check_out_date,
        total_cost,
        host_id
      ])
      // .then((booking) => console.log(booking))
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  },

  getHostListings: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .get_host_listings([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },

  getRequests: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .get_requests([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },

  getTrips: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .get_trips([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },

  // ***** USER ***** //
  // Get all listings
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    console.log("get all");
    dbInstance
      .get_results()
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Get all listings by ZIP
  getByZip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .zip_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Get all listings by State
  getByState: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .state_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Get all listings by City
  getByCity: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .city_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Get all listings by Category
  getByCategory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .category_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Get listing by Listing ID
  getByListingId: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .listing_id_result([params.id])
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err));
  },
  // Update Listing
  updateListing: (req, res, next) => {
    console.log("function ran!");
    const dbInstance = req.app.get("db");
    const { params } = req;
    const {
      listing_name,
      img_1,
      img_2,
      img_3,
      img_4,
      img_5,
      fires,
      potable_water,
      pets,
      toilets,
      trash,
      showers,
      wifi,
      max_campers,
      price_per_night,
      min_night_stay,
      check_in_time,
      check_out_time,
      description
    } = req.body;

    dbInstance
      .update_listing([
        params.id,
        listing_name,
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        fires,
        potable_water,
        pets,
        toilets,
        trash,
        showers,
        wifi,
        max_campers,
        price_per_night,
        min_night_stay,
        check_in_time,
        check_out_time,
        description
      ])
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  },

  // Approve Request
  approveRequest: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    console.log(params.id)
    dbInstance
    .approve_request([params.id])
    .then(() => res.status(200).send())
    .catch(err => res.status(500).send(err));
  
},

  // Delete a listing by ID
  deleteListing: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .delete_listing([params.id])
      .then(() => res.status(200).send())
      .catch(err => res.status(500).send(err));
  }
};
