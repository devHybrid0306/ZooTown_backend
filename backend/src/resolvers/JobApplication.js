const JobApplication = {
      user: ({ id }, args, context) => {
        return context.prisma.jobApplication({ id }).applications()
      },
      attachments: ({ id }, args, context) => {
        return context.prisma.jobApplication({ id }).attachments()
      },
  }
  
  module.exports = {
    JobApplication
  }
  