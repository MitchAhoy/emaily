const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireCredits')
const requireCredits = require('../middlewares/requireCredits')

const Survey = mongoose.model('surveys')

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
        const {title, subject, body, recipients} = req.body

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(),

        })

        save()
    })
}