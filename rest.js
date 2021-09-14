let restaurant = {
    name: 'ASB',
    gusetCapacity: 75,
    guestCount: 0,
    seatParty: function (add) {
        this.guestCount = add + this.guestCount

    },
    removeParty: function (take) {
        this.guestCount = this.guestCount - take
    },
    checkAvailability: function (partySize) {
        let seatLeft = this.gusetCapacity - this.guestCount
        return partySize <= seatLeft
    }
}

restaurant.seatParty(75)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))