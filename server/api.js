'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./routes/auth'))
  .use('/users', require('./routes/users'))
  .use('/mail', require('./routes/sendgrid.js'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
