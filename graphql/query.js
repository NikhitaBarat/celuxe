const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')


let schema = buildSchema(`
    type Query {
        hello: String
    }
`)

let root = {
    hello: () => {
        return 'Welcome to GraphQL'
    }
}

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
});