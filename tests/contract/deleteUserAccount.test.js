const { spec } = require("pactum");
const { DeleteUserSchema } = require("../../schemas/deleteUserSchema");
const { setup } = require("../../config/pactum.config");
const { createValidUser } = require("../../utils/create.user.helpers");

describe("API 12: Remover usuários", () => {
  let newUser;

  before(() => {
    setup();
  });

  beforeEach(async () => {
    newUser = createValidUser();

    await spec().post("/createAccount").withForm(newUser).expectStatus(200);
  });

  it("deve validar a estrutura e os tipos dos campos da resposta de exclusão", async () => {
    const response = await spec()
      .delete("/deleteAccount")
      .withForm({
        email: newUser.email,
        password: newUser.password,
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
