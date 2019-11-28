const uuid = require('uuid/v1')
const aws = require('aws-sdk')
// aws.config.update({region: 'us-east-1'});

const s3 = new aws.S3({
  accessKeyId: 'AKIAXSZXJHR3KEM6LFMU',
  secretAccessKey: 'X8evu99/xqh0E4OEaWfdQZsPfUju1PXsBsRFqIX7',
  params: {
    Bucket: 'zoo-cvdoctor'
  },
//   endpoint: new aws.Endpoint('http://localhost:4569') // fake s3 endpoint for local dev
})

exports.processCvUpload = async ( upload, ctx ) => {
  if (!upload) {
    return console.log('ERROR: No file received.')
  }
  
  const { stream, filename, mimetype, encoding } = await upload
  // const stream = createReadStream()
  const key = uuid() + '-' + filename
  // console.log(stream, filename, mimetype, encoding , key)
  const response = await s3
    .upload({
      Key: key,
      ACL: 'public-read',
      Body: stream
    }).promise()

  const url = response.Location

  // Sync with Prisma
  const data = {
    filename: key,
    mimetype,
    encoding,
    url,
  }

  const { id } = await ctx.prisma.createCvFile(data, ` { id } `)

  const file = {
    id,
    filename: key,
    mimetype,
    encoding,
    url,
  }

  return file
}
