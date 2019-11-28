const User = {
  posts: ({ id }, args, context) => {
    return context.prisma.user({ id }).posts()
  },
  company: ({ id }, args, context) => {
    return context.prisma.user({ id }).company()
  },
  plan: ({ id }, args, context) => {
    return context.prisma.user({ id }).plan()
  },
  
}

module.exports = {
  User,
}
