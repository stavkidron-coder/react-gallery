const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM images;`;
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