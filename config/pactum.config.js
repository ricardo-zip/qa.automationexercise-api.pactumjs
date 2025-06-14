const pactum = require("pactum");

const baseUrl = "https://automationexercise.com/api";

function setup() {
  pactum.request.setBaseUrl(baseUrl);
}

module.exports = { setup };
