class Traveler {
    constructor(name, isHealthy, food) {
        this.name = name;
        this.isHealthy = isHealthy;
        this.food = Number(food);
    }

    hunt() {
        this.food += 2;

        return this.food
    }

    eat() {
        if (this.food >= 1) {
            this.food -= 1;
        }

        else {
            this.isHealthy = false;
        }

        return this.isHealthy;
    }
}

module.exports = Traveler;