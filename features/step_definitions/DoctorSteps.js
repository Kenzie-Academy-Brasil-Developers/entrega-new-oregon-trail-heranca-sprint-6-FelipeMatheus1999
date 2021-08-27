const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { medico } = require("./../../app");

/** GIVEN */

Given('um Doctor de nome {string}', function (string) {
    medico.name = string
});

/** WHEN */

When('o Doctor comer {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        medico.eat();
    }
});

/** THEN */

Then('a quantidade de comida deve ser igual {int}', function (int) {
    assert.strictEqual(medico.food, int)
});

Then('o Doctor não ficará doente', function () {
    assert.strictEqual(medico.isHealthy, true)
});

Then('o Doctor ficará doente', function () {
    assert.strictEqual(medico.isHealthy, false)
});


Then('a quantidade de refeição deve ser igual a {int}', function (int) {
    assert.strictEqual(medico.food, int)
});