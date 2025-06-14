const { spec } = require("pactum");

async function deleteUserByEmailAndPassword(email, password) {
  return spec()
    .delete("/deleteAccount")
    .withForm({ email, password })
    .expectStatus(200);
}

module.exports = { deleteUserByEmailAndPassword };
