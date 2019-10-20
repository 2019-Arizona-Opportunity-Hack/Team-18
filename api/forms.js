const router = require('express').Router();
const async = require('async');
const asyncExpress = require('../config/asyncHandler');

router.get("/", asyncExpress(async req => {

}));