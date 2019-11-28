const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
const { processUpload } = require('./fileapi')
const {processCvUpload} = require('./cvfilesapi')
const Mutation = {
  signup: async (parent, args, context) => {
    const hashedPassword = await hash(args.data.password, 10)
    args.data.password = hashedPassword;
    const user = await context.prisma.createUser(args.data)
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }
    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    }
  },
  createDraft: async (parent, { title, content }, context) => {
    const userId = getUserId(context)
    return context.prisma.createPost({
      title,
      content,
      author: { connect: { id: userId } },
    })
  },
  deletePost: async (parent, { id }, context) => {
    return context.prisma.deletePost({ id })
  },
  publish: async (parent, { id }, context) => {
    return context.prisma.updatePost({
      where: { id },
      data: { published: true },
    })
  },
  uploadFile: async (parent, { file }, context) => {
  return await processUpload(await file, context)
  },
  uploadCvFile: async (parent, { file }, context) => {
    return await processCvUpload(await file, context)
  },
  // TODO: Further split this functions to modules
  createPlan: async(parent, args, context) => {
    return context.prisma.createPlan(args.data)
  },
  createCompany: async(parent, args, context) => {
    return context.prisma.createCompany(args.data)
  },
  createJob: async(parent, args, context) => {
    return context.prisma.createJob(args.data)
  },
  createProject: async(parent, args, context) => {
    return context.prisma.createProject(args.data)
  },
  createJobApplication: async(parent, args, context) => {
    return context.prisma.createJobApplication(args.data)
  },
  createProjectApplication: async(parent, args, context) => {
    return context.prisma.createProjectApplication(args.data)
  },
  createCvDoctor: async(parent, args, context) => {
    return context.prisma.createCvDoctor(args.data)
  },
  createCvDoctorReply: async(parent, args, context) => {
    return context.prisma.createCvDoctorReply(args.data)
  },
  createSavedJob: async(parent, args, context) => {
    return context.prisma.createSavedJob(args.data)
  },
  createSavedProject: async(parent, args, context) => {
    return context.prisma.createSavedProject(args.data)
  },
  
}

module.exports = {
  Mutation,
}
