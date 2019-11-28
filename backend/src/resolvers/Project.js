const Project = {
    postedBy: ({ id }, args, context) => {
      return context.prisma.project({ id }).postedBy()
    },
    company: ({ id }, args, context) => {
        return context.prisma.project({ id }).company()
      },
      applications: ({ id }, args, context) => {
        return context.prisma.project({ id }).applications()
      },
      attachments: ({ id }, args, context) => {
        return context.prisma.project({ id }).attachments()
      },
  }
  
  module.exports = {
    Project
  }
  