const express = require('express');
const app = express();
const termUnitRoutes = express.Router();

// Requiring TermUnit model
let TermUnit = require('../models/TermUnit');

// Defining store route
termUnitRoutes.route('/add').post(function (req, res) {
  let termUnit = new TermUnit(req.body);
  termUnit.save()
    .then(game => {
      res.status(200).json({ 'termUnit': 'TermUnit added successfully' });
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});

// Defining get data route
termUnitRoutes.route('/').get(function (req, res) {
  TermUnit.find(function (err, termUnits) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(termUnits);
    }
  });
});

// Defining edit route
termUnitRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  TermUnit.findById(id, function (err, termUnit) {
    res.json(termUnit);
  });
});

//  Defining update route
termUnitRoutes.route('/update/:id').post(function (req, res) {
  TermUnit.findById(req.params.id, function (err, termUnit) {
    if (!termUnit)
      return next(new Error('Could not load document'));
    else {
      termUnit.term = req.body.term;
      termUnit.date = req.body.date;
      termUnit.count = req.body.term;

      termUnit.save().then(termUnit => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("Unable to update database");
        });
    }
  });
});

// Defined delete | remove | destroy route
termUnitRoutes.route('/delete/:id').get(function (req, res) {
  TermUnit.findByIdAndRemove({ _id: req.params.id }, function (err, termUnit) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = termUnitRoutes;
