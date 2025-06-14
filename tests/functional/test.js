const { spec } = require("pactum");
const { setup } = require("../../config/pactum.config");
const { createValidUser } = require("../../utils/create.user.helpers");

beforeEach(async () => {
  testUser = createValidUser();

  await pactum
    .spec()
    .post("/createAccount")
    .withForm(testUser)
    .expectStatus(200);
});

describe("API 11: Validar a criação de um novo registro de Usuário", () => {
  it("CT01 - Criar usuário com dados válidos - Deve retornar 201 Created e confirmar criação com ID", async () => {
    await pactum
      .spec()
      .post("/createAccount")
      .withForm(testUser)
      .expectStatus(201)
      .expectJsonLike({ responseCode: 201 });
  });
});
