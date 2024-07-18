const express = require('express');
const feedController = require('../controller/feedController');


const router = express.Router();


router.route('/feedItem')
    .get(feedController.getAllFeedItems)
    .post(feedController.createFeedItems);

router.route('/feedItems/:id')
    .get(feedController.getFeedItemsById)
    .put(feedController.updateFeedItems)
    .delete(feedController.deleteFeedItems);

module.exports = router;