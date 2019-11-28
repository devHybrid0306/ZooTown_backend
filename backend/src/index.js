const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')
const { permissions } = require('./permissions')
const { importSchema } =  require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools')

const server = new GraphQLServer({
  // typeDefs: 'src/schema.graphql',
  typeDefs: importSchema('src/typeDefs/schema.graphql'),
  resolvers,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
