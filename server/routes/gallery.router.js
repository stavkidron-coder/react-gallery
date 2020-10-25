const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log("in PUT", req.params);
    const queryText = `UPDATE "images" SET "likes" = "likes"+1 WHERE ID = $1;`
    pool.query(queryText, [req.params.id]).then((result) => {
        console.log('Result from PUT', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR in PUT:', error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM images ORDER BY id;`;
    pool.query(queryText)
    .then((result) => {
        console.log('GET route from DB successful', result.rows);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET from DB:', error);
        res.sendStatus(500); 
    });
    
}); // END GET Route

module.exports = router;