const fs = require('fs')
// access global mock db file
const events = require(global.mock_db)

// write service method implementations
const event_service = {
    getAll() {
        return events
    }
}

module.exports = event_service
