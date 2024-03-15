'use strict';
const axios = require('axios');

axios.get('https://axios-http.com/docs/api_intro').then((res) => {
  console.log(res.data);
});
