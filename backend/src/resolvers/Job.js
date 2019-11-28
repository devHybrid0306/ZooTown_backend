const Job = {
    postedBy: ({ id }, args, context) => {
      return context.prisma.job({ id }).postedBy()
    },
    company: ({ id }, args, context) => {
        return context.prisma.job({ id }).company()
      },
      applications: ({ id }, args, context) => {
        return context.prisma.job({ id }).applications()
      },
      attachments: ({ id }, args, context) => {
        return context.prisma.job({ id }).attachments()
      },
  }
  
  module.exports = {
    Job,
  }
  