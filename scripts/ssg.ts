import fs from 'fs'

export default async () => {
  const blogPostFiles = fs
    .readdirSync('web/dist/blog/')
    .filter((filename) => filename.endsWith('.html'))
    .map((fileName) => 'web/dist/blog/' + fileName)

  const htmlFilesToClean = [
    ...blogPostFiles,
    'web/dist/index.html',
    'web/dist/blog.html',
  ]

  htmlFilesToClean.forEach((fileName) => {
    const file = fs.readFileSync(fileName, 'utf-8')
    const fileWithoutReact = file
      .replace(
        /<script defer="defer" src="\/static\/js\/runtime-app\.\w{8}\.js"><\/script>/,
        ''
      )
      .replace(
        /<script defer="defer" src="\/static\/js\/app\.\w{8}\.js"><\/script>/,
        ''
      )
    fs.writeFileSync(fileName, fileWithoutReact)

    console.log('fileWithoutReact', fileWithoutReact)
  })
}
