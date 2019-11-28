const SavedJob = {
    job: ({ id }, args, context) => {
      return context.prisma.savedJob({ id }).job()
    },
    user: ({ id }, args, context) => {
        return context.prisma.savedJob({ id }).user()
    },
  }
  
  module.exports = {
    SavedJob,
  }
  