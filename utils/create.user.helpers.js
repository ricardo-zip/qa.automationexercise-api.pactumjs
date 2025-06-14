const { faker } = require("@faker-js/faker");

function createValidUser() {
  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: "age" });

  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(12),
    title: faker.person.prefix(),
    birth_date: String(faker.number.int({ min: 1, max: 28 })),
    birth_month: String(faker.number.int({ min: 1, max: 12 })),
    birth_year: String(birthDate.getFullYear()),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    zipcode: faker.location.zipCode(),
    state: faker.location.state(),
    city: faker.location.city(),
    mobile_number: faker.phone.number("##########"),
  };
}

module.exports = { createValidUser };
