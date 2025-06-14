const pactum = require("pactum");
const { DeleteUserSchema } = require("../../schemas/deleteUserSchema");
const { setup } = require("../../config/pactum.config");
const { createValidUser } = require("../../utils/create.user.helpers");

describe("API 12: Remover usuários", () => {
  let testUser;

  before(() => {
    setup();
  });

  beforeEach(async () => {
    testUser = createValidUser();

    await pactum
      .spec()
      .post("/createAccount")
      .withForm(testUser)
      .expectStatus(200);
  });

  it("deve validar a estrutura e os tipos dos campos da resposta de deleção", async () => {
    const response = await pactum
      .spec()
      .delete("/deleteAccount")
      .withForm({
        email: testUser.email,
        password: testUser.password,
      })
      .expectStatus(200)
      .returns("res.body");

    const { error } = DeleteUserSchema.validate(response);
    if (error) {
      throw new Error(
        `Validação de contrato falhou: ${error.details[0].message}`
      );
    }
  });
});
