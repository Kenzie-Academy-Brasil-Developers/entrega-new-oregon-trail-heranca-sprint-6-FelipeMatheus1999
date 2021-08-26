class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.crew = [];
    }

    getAvailableSeatCount() {
        return this.capacity - this.crew.length;
    }

    join(crewMember) {
        if (this.capacity > this.crew.length) {
            this.crew.push(crewMember);
        }
    }

    shouldQuarantine() {
        for (let i = 0; i < this.crew.length; i++) {
            if (this.crew[i].isHealthy === false) {
                return true;
            }

            else {
                return false;
            }
        }
    }

    totalFood() {
        this.crew.reduce(function(acc) {
            acc += this.crew.food;

            return acc;
        }, 0)
    }
}

module.exports = Wagon;