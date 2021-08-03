const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'message depuis le fichier register' });
});

module.exports = router;
