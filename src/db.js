const env = process.env.NODE_ENV || 'development'
const { Database } = require('arangojs')
const { databaseName } = require('../arangodb_config')[env]

const { USESTHIS_DB_USER, USESTHIS_DB_PASSWORD } = process.env

const db = new Database()
db.useDatabase(databaseName)
db.useBasicAuth(USESTHIS_DB_USER, USESTHIS_DB_PASSWORD)

module.exports.db = db