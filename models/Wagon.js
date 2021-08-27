class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        if (this.passengers.length < this.capacity) {
            return this.capacity - this.passengers.length;
        }

        return false;
    }

    join(passengersMember) {
        let seats = this.getAvailableSeatCount()

        if (seats !== false) {
            this.passengers.push(passengersMember);
        }

        return false;
    }

    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === "false") {
                return true;
            }
        }

        return false;
    }

    totalFood() {
        const total = this.passengers.reduce((acc, passengers) => acc + passengers.food, 0)

        return total;
    }
}

module.exports = Wagon;