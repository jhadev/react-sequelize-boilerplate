const { Example } = require('../models');

const findAll = (req, res) => {
  Example.findAll({})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};

const create = ({ body }, res) => {
  Example.create(body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
};

module.exports = {
  findAll,
  create
};
