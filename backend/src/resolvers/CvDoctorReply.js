const CvDoctorReply = {
  attachments: ({ id }, args, context) => {
    return context.prisma.cvDoctorReply({ id }).attachments()
  },
  request: ({ id }, args, context) => {
    return context.prisma.cvDoctorReply({ id }).request()
  },
  postedBy: ({ id }, args, context) => {
    return context.prisma.cvDoctorReply({ id }).postedBy()
  },
}

module.exports = {
  CvDoctorReply,
}
