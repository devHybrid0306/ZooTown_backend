const { Query } = require('./Query')
const { Mutation } = require('./Mutation')
const { User } = require('./User')
const { Post } = require('./Post')
const {Company} = require('./Company')
const { Job } = require('./Job')
const { File } = require('./File')
const { Plan } = require('./Plan')
const { Project } = require('./Project')
const { JobApplication } = require('./JobApplication')
const { ProjectApplication } = require('./ProjectApplication')
const {SavedJob} = require('./SavedJob');
const {SavedProject } = require('./SavedProject')
const { CvDoctor } = require('./CvDoctor')
const { CvDoctorReply } = require('./CvDoctorReply')
const { CvFile } = require('./CvFile')
const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Company,
  Job,
  File,
  Plan,
  Project,
  JobApplication,
  ProjectApplication,
  SavedJob,
  SavedProject,
  CvDoctor,
  CvDoctorReply,
  CvFile
}

module.exports = {
  resolvers,
}
