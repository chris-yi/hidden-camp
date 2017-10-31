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
      .catch(() => res.status(500).send());
  },

  getHostListings: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .get_host_listings([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },

  // ***** USER ***** //
  // Get all listings
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_results()
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },
  // Get all listings by ZIP
  getByZip: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .zip_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },
  // Get all listings by State
  getByState: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .state_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },
  // Get all listings by City
  getByCity: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .city_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },
  // Get all listings by Category
  getByCategory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .category_results([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  },
  // Get listing by Listing ID
  getByListingId: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;

    dbInstance
      .listing_id_result([params.id])
      .then(results => res.status(200).send(results))
      .catch(() => res.status(500).send());
  }
};
