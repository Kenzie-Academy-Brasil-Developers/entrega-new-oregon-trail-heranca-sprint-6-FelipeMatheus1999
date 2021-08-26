class Traveler {
    constructor(name, isHealthy = "true", food = "1") {
        this.name = name;
        this.food = Number(food);
        this.isHealthy = isHealthy;
    }

    hunt() {
        this.food += 2;
    }

    eat() {
        if (this.food >= 1) {
            this.food -= 1;
        }

        else {
            this.isHealthy = false;
        }
    }
}

module.exports = Traveler;