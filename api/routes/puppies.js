const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../controllers/puppies');

/* GET /api/puppies */
router.get('/puppies', puppiesCtrl.indexPuppy);
// router.get('/puppies/:id', puppiesCtrl.show);
// router.post('/puppies', puppiesCtrl.create);
// router.delete('/puppies/:id', puppiesCtrl.delete);
// router.put('/puppies/:id', puppiesCtrl.update);


module.exports = router;