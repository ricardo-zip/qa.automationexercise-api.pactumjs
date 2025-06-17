const { spec } = require("pactum");
const { setup } = require("../../config/pactum.config");
const { createValidUser } = require("../../utils/create.user.helpers");

describe("[FUNCIONAIS] API 12: Exclusão de usuários", () => {
  before(() => {
    setup();
  });

  beforeEach(() => {
    newUser = createValidUser();
  });

  it("deve deletar um usuário com sucesso", async () => {
    await spec().post("/createAccount").withForm(newUser).expectStatus(200);

    await spec()
      .delete("/deleteAccount")
      .withForm({
        email: newUser.email,
        password: newUser.password,
      })
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 200,
        message: "Account deleted!",
      });
  });

  it("não deve deletar um usuário inexistente", async () => {
    await spec()
      .delete("/deleteAccount")
      .withForm({
        email: "usuario.inexistente@mail.com",
        password: "senhaIncorreta123",
      })
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 404,
        message: "Account not found!",
      });
  });

  it("validar inexistência de usuário após exclusão da conta", async () => {
    await spec().post("/createAccount").withForm(newUser).expectStatus(200);

    await spec()
      .delete("/deleteAccount")
      .withForm({
        email: newUser.email,
        password: newUser.password,
      })
      .expectStatus(200);

    await spec()
      .get(`/getUserDetailByEmail`)
      .withQueryParams("email", newUser.email)
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 404,
        message: "Account not found with this email, try another email!",
      });
  });
});
