/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/sta001s              ->  index
 * POST    /api/sta001s              ->  create
 * GET     /api/sta001s/:id          ->  show
 * PUT     /api/sta001s/:id          ->  update
 * DELETE  /api/sta001s/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Sta001 from './sta001.model';
import fs from 'fs';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Sta001s
export function index(req, res) {
  return Sta001.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Sta001 from the DB
export function show(req, res) {
  return Sta001.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Sta001 in the DB
export function create(req, res) {
  return Sta001.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Sta001 in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Sta001.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Sta001 from the DB
export function destroy(req, res) {
  return Sta001.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Uploads a new Sta001
export function upload(req, res) {
  fs.readFile(req.file.path, 'utf8', function (err, data) {
    if(err) { return handleError(res, err); }
    var kitBarcodeLines = JSON.parse(data).kitBarcodeLines;
    var kitBarcode = "";
    for (var i = 0; i < kitBarcodeLines.length; i++) {
      kitBarcode += kitBarcodeLines[i].substr(2, kitBarcodeLines[i].length -3);
    }
    console.log(kitBarcode);
    var o = {};
    o.kitBarcode = kitBarcode;
    fs.writeFile(
      'upload_o.json', 
      JSON.stringify(o),
      function (err) {if (err) return console.log(err);}
    );
    return res.status(200).json(o);
    // return Sta001.create(req.body)
    //   .then(respondWithResult(res, 201))
    //   .catch(handleError(res));
  });
}
