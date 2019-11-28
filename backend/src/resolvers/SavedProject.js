const SavedProject = {
  project: ({ id }, args, context) => {
      return context.prisma.savedProject({ id }).project()
    },
    user: ({ id }, args, context) => {
      return context.prisma.savedProject({ id }).user()
    },
  }
  
  module.exports = {
    SavedProject,
  }
  