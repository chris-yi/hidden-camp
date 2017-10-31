module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.get_results()
        .then( results => res.status(200).send( results ))
        .catch( () => res.status(500).send())
    },

    getByZip: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;

        dbInstance.zip_results([params.id])
        .then( results => res.status(200).send( results ))
        .catch( () => res.status(500).send())
    },

    getByState: (req, res, next) => {
        const dbInstance = req.app.get("db");
        const { params } = req;

        dbInstance.state_results([params.id])
        .then( results => res.status(200).send( results ))
        .catch( () => res.status(500).send())
    }
}