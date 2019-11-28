const CvDoctor = {
  attachments: ({ id }, args, context) => {
    return context.prisma.cvDoctor({ id }).attachments()
  },
  user: ({ id }, args, context) => {
    return context.prisma.cvDoctor({ id }).user()
  },
}

module.exports = {
  CvDoctor,
}
