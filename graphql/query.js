const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const axios = require('axios')

let schema = buildSchema(`
    type Event {
        event_name: String,
        date: String,
        hostedby: String,
        venue: String,
        description: String
    }
    
    type Query {
        hello: String,
        events: [Event]
    }
`)

let root = {
    hello: () => {
        return 'Welcome to GraphQL'
    },
    events: () => {
        let events = []
        events = getEvents()
        return events
    }
}



const getEvents = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/event/all')
        return response.data
    }catch(err) {
        console.error(err)
    }
}

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});