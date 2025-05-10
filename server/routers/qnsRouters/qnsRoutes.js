const express = require('express');
const router = express.Router();
const getQuestions = require('../../controllers/qnsControllers/qnsController')


router.get('/getQuestions', getQuestions.getQuestions);


module.exports = router;
