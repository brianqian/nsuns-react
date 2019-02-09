const router = require('express').Router();
const apiRoutes = require('./api/apiRoutes');
const authRoutes = require('./auth/authRoutes');
const path = require('path');
const express = require('express');

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
  router.use(express.static('client/build'));
  router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
} else {
  router.use(express.static(__dirname + 'client/public'));
  router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}

module.exports = router;
