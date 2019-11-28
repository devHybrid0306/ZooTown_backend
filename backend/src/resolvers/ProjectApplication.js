const ProjectApplication = {
      user: ({ id }, args, context) => {
        return context.prisma.projectApplication({ id }).applications()
      },
      attachments: ({ id }, args, context) => {
        return context.prisma.projectApplication({ id }).attachments()
      },
  }
  
  module.exports = {
    ProjectApplication
  }
  