const { spec } = require("pactum");
const { ProductsListSchema } = require("../../schemas/productsListSchema");
const { setup } = require("../../config/pactum.config");

describe("API 1: Listar todos Produtos", () => {
  before(() => {
    setup();
  });

  it("deve validar a estrutura e os tipos dos campos da resposta", async () => {
    const response = await spec()
      .get("/productsList")
      .expectStatus(200)
      .returns("res.body");

    const { error } = ProductsListSchema.validate(response);
    if (error) {
      throw new Error(`Validação falhou: ${error.details[0].message}`);
    }
  });
});
