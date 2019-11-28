const Company = {
    recruiters: ({ id }, args, context) => {
      return context.prisma.company({ id }).recruiters()
    },
  }
  
  module.exports = {
    Company,
  }
  