const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    movieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
        required: true
    },
    day: {
        type: String,
        minlenght: "6",
        required: true
    },
    time: {
        type: String,
        minlenght: "5",
        required: true
    },
    noOfTickets: {
        noOfAdult: {
            type: Number,
            required: true,
            default: 0
        },
        noOfChild: {
            type: Number,
            required: true,
            default: 0
        },
        noOfConcession: {
            type: Number,
            required: true,
            default: 0
        }
    },
    paymentID: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Tickets", ticketSchema);