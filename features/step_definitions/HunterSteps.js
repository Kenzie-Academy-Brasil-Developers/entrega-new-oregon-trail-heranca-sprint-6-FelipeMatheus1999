const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");

/** GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string;
});

Given('ele sempre começa com {int} de comida', function (int) {
    cacador.food = int
});

/** WHEN */

When('o Traveler parar para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter parar para comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.eat();
    }
});

When('o Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('Hunter sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

/** THEN */

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});

Then('a quantidade de comida deve ser igual a {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

Then('a quantidade de refeição deve ser igual {int}', function (int) {
    assert.strictEqual(cacador.food, int)
});

// Then('a quantidade de refeição deve ser igual a {int}', function (int) {
//     assert.strictEqual(cacador.food, int)
// });