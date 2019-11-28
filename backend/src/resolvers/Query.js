const { getUserId } = require('../utils')

const Query = {
  me: (parent, args, context) => {
    const userId = getUserId(context)
    return context.prisma.user({ id: userId })
  },
  users: (parent, args, context) => {
    return context.prisma.users(args)
  },
  feed: (parent, args, context) => {
    return context.prisma.posts({ where: { published: true } })
  },
  filterPosts: (parent, { searchString }, context) => {
    return context.prisma.posts({
      where: {
        OR: [
        {
            title_contains: searchString,
          },
          {
            content_contains: searchString,
          },
        ],
      },
    })
  },
  post: (parent, { id }, context) => {
    return context.prisma.post({ id })
  },
  files: (parent, args, context) => {
    return context.prisma.files(args)
  },
  file: (parent, args, context) => {
    return context.prisma.file(args)
  },
  cvFiles: (parent, args, context) => {
    return context.prisma.cvFiles(args)
  },
  cvFile: (parent, args, context) => {
    return context.prisma.cvFile(args)
  },
  plans: (parent, args, context) => {
    return context.prisma.plans(args)
  },
  plan: (parent, args, context) => {
    return context.prisma.plan(args)
  },
  companies: (parent, args, context) => {
    return context.prisma.companies(args)
  },
  company: (parent, args, context) => {
    return context.prisma.company(args)
  },
  jobs: (parent, args, context) => {
    return context.prisma.jobs(args)
  },
  job: (parent, args, context) => {
    return context.prisma.job(args)
  },
  projects: (parent, args, context) => {
    return context.prisma.projects(args)
  },
  project: (parent, args, context) => {
    return context.prisma.project(args)
  },
  jobApplications: (parent, args, context) => {
    return context.prisma.jobApplications(args)
  },
  jobApplication: (parent, args, context) => {
    return context.prisma.jobApplication(args)
  },
  projectApplications: (parent, args, context) => {
    return context.prisma.projectApplications(args)
  },
  projectApplication: (parent, args, context) => {
    return context.prisma.projectApplication(args)
  },
  savedJobs: (parent, args, context) => {
    return context.prisma.savedJobs(args)
  },
  savedJob: (parent, args, context) => {
    return context.prisma.savedJob(args)
  },
  savedProjects: (parent, args, context) => {
    return context.prisma.savedProjects(args)
  },
  savedProject: (parent, args, context) => {
    return context.prisma.savedProject(args)
  },
  cvDoctors: (parent, args, context) => {
    return context.prisma.cvDoctors(args)
  },
  cvDoctor: (parent, args, context) => {
    return context.prisma.cvDoctor(args)
  },  
  cvDoctorReplies: (parent, args, context) => {
    return context.prisma.cvDoctorReplies(args)
  },
  cvDoctorReply: (parent, args, context) => {
    return context.prisma.cvDoctorReply(args)
  },
}

module.exports = {
  Query,
}
