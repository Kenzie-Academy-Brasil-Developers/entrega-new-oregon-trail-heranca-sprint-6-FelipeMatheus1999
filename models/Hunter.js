const Traveler = require("./Traveler");

class Hunter extends Traveler {
    constructor(name, isHealthy, food) {
        super(name, isHealthy, food);
    }

    hunt() {
        this.food += 5;
    }

    eat() {
        if (this.food >= 2) {
            this.food -= 2;
            this.isHealthy = true
        }

        else if (this.food < 2) {
            this.food = 0;
            this.isHealthy = false;
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits;
        }
    }
}

module.exports = Hunter;