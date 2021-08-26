const Traveler  = require("./models/Traveler");
const Hunter = require("./models/Hunter");
const Doctor = require("./models/Doctor");
const Wagon     = require("./models/Wagon");

let viajante = new Traveler();
let cacador = new Hunter();
let medico = new Doctor();
let carroca = new Wagon();

let viajanteSergio = new Traveler();
let viajanteSimone = new Traveler();
let viajanteSamuel = new Traveler();
let viajanteSandra = new Traveler();
let viajanteJoão   = new Traveler();
let viajanteDiego  = new Traveler();
let viajanteDiana  = new Traveler();

module.exports = {
    viajante,
    cacador,
    medico,
    carroca,
}