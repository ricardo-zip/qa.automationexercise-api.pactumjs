const { spec } = require("pactum");
const { DeleteUserSchema } = require("../../schemas/deleteUserSchema");
const { setup } = require("../../config/pactum.config");
const { createValidUser } = require("../../utils/create.user.helpers");

describe("API 11: Criação de usuários", () => {
  before(() => {
    setup();
  });

  beforeEach(() => {
    newUser = createValidUser();
  });

  afterEach(async function () {
    const {
      deleteUserByEmailAndPassword,
    } = require("../../utils/delete.user.helpers");

    afterEach(async function () {
      if (this.currentTest.state === "passed" && newUser?.email) {
        await deleteUserByEmailAndPassword(newUser.email, newUser.password);
      }
    });
  });

  it("deve realizar cadastro com sucesso", async () => {
    await spec()
      .post("/createAccount")
      .withForm(newUser)
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 201,
        message: "User created!",
      });
  });

  it("validar existência de usuário após o cadastro da conta", async () => {
    const emailToTest = newUser.email;

    await spec().post("/createAccount").withForm(newUser).expectStatus(200);

    await spec()
      .get("/getUserDetailByEmail")
      .withQueryParams("email", emailToTest)
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 200,
        user: {
          email: emailToTest,
        },
      });
  });

  it("não deve realizar cadastro com um e-mail já cadastrado", async () => {
    let newUserDuplicate = createValidUser();
    await spec()
      .post("/createAccount")
      .withForm(newUserDuplicate)
      .expectStatus(200);

    await spec()
      .post("/createAccount")
      .withForm(newUserDuplicate)
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 400,
        message: "Email already exists!",
      });
  });

  it("não deve criar usuário quando faltar campo obrigatório", async function () {
    const userWithoutEmail = createValidUser();
    delete userWithoutEmail.email;

    await spec()
      .post("/createAccount")
      .withForm(userWithoutEmail)
      .expectStatus(200)
      .expectJsonLike({
        responseCode: 400,
        message: "Bad request, email parameter is missing in POST request.",
      });
  });
});
