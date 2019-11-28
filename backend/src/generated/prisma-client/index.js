"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Plan",
    embedded: false
  },
  {
    name: "Company",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Job",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "JobApplication",
    embedded: false
  },
  {
    name: "ProjectApplication",
    embedded: false
  },
  {
    name: "SavedJob",
    embedded: false
  },
  {
    name: "SavedProject",
    embedded: false
  },
  {
    name: "CvDoctor",
    embedded: false
  },
  {
    name: "CvDoctorReply",
    embedded: false
  },
  {
    name: "CvFile",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "NOTIFICATION_TYPE",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/wamburu-517881/zootown/dev`
});
exports.prisma = new exports.Prisma();
