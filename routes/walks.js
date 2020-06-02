const router = require('express').Router();
const walksCtrl = require('../controllers/walks');


router.post('/dogs/:id/walks',isLoggedIn,walksCtrl.create);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;