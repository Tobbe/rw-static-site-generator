import fs from 'fs'

export default async () => {
  const blogPostFiles = fs
    .readdirSync('web/dist/blog/')
    .filter((filename) => filename.endsWith('.html'))

  blogPostFiles.forEach((fileName) => {
    const htmlFileName = `web/dist/blog/${fileName}`
    const file = fs.readFileSync(htmlFileName, 'utf-8')
    const fileWithoutReact = file
      .replace(
        /<script defer="defer" src="\/static\/js\/runtime-app\.\w{8}\.js"><\/script>/,
        ''
      )
      .replace(
        /<script defer="defer" src="\/static\/js\/app\.\w{8}\.js"><\/script>/,
        ''
      )
    fs.writeFileSync(htmlFileName, fileWithoutReact)

    console.log('fileWithoutReact', fileWithoutReact)
  })
}
