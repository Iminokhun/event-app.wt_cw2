const fs = require('fs')
// access global mock db file
const events = require(global.mock_db)

// write service method implementations
const event_service = {
    getAll() {
        return events
    },

    getById(id) {
        return events.find(t => t.id == id)
    },    

    create(req, res) {
        let new_id = genRandId(4)
                
        const ticket = req.body

        const new_ticket = {
            id: new_id,
            ticket: ticket
        }

        events.push(new_ticket)
        
        writeToFile(events)
        
        return new_ticket
    },

    update(id, updateData){
        const eventIndex = events.findIndex(t => t.id == id)

        if (eventIndex === -1) {
            return null
        }

        events[eventIndex].event = { ...events[eventIndex].event, ...updateData }

        writeToFile(events)

        return events[eventIndex]
    },

    delete(id) {
        const index = events.findIndex(u => u.id == id)
        events.splice(index, 1)    
        writeToFile(events)
    }

}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}


module.exports = event_service
