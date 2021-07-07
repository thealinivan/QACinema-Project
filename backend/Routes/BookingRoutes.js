const express = require('express');
const router = express.Router();

const Ticket = require('../Models/Booking');

//create movie using form
router.post('/booking', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201)
            .send(booking);
    } catch {
        res.status(404)
            .send({ error: 'The request could not be completed' });
    }
});

//get all bookings
router.get('/booking', async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate({
                path: 'movieID',
                select: 'title imageURL'
            });
        res.status(201)
            .send(bookings);
    } catch {
        res.status(404)
            .send({ error: 'No bookings available' });
    }
});


//update booking by id
router.put('/booking/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        booking = new Booking(res.body);
        await booking.save();
        res.status(201)
            .send(booking);
    } catch {
        res.status(404)
            .send({ error: 'The booking could not be updated' });
    }
});

//delete movie
router.delete('/booking/:id', async (req, res) => {
    try {
        const booking = await Ticket.findById(requ.params.id);
        const payment = await Payment.findById(booking.paymentID);
        await payment.deleteOne();
        await booking.deleteOne();
        res.status(201)
            .send(booking);
    } catch {
        res.status(404)
            .send({ error: 'the booking could not be deleted' });
    }
});

//get bookings by id
router.get('/booking/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate({
                path: 'movieID',
                select: 'title imageURL'
            });
        res.status(201)
            .send(booking);
    } catch {
        res.status(404)
            .send({ error: 'Booking does not exist' })
    }
});

//get bookings by name
router.get('/booking/name/:name', async (req, res) => {
    try {
        const booking = await Booking.find({ name: { $eq: req.params.name } })
            .populate({
                path: 'movieID',
                select: 'title imageURL dateTime'
            });
        res.status(201)
            .send(booking);
    } catch {
        res.status(404)
            .send({ error: 'no bookings' });
    }
});


module.exports = router;