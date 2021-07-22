require('dotenv').config();
const axios = require('axios');

const api = axios.create({
  baseURL: process.env.URL_API_TAKE
});

module.exports = api;
