const { ssrBuild, build } = require('vite')
const { resolve, join } = require('path')
const { writeFileSync, rmdirSync } = require('fs')
const renderer = require('@vue/server-renderer')

const main = async () => {
  const outDir = resolve(process.cwd(), 'dist')
  const tmpDir = resolve(process.cwd(), 'dist/tmp')

  const [clientResult] = await build({ outDir })

  await ssrBuild({
    outDir: tmpDir,
    rollupInputOptions: {
      input: { index: 'src/main.js' },
      preserveEntrySignatures: 'allow-extension',
    },
  })

  console.info('📝 Generating page...')
  const { createApp } = require(join(tmpDir, '_assets'))

  const content = await renderer.renderToString(createApp())
  const indexPath = resolve(outDir, 'index.html')
  const indexOutput = clientResult.html.replace(
    '<div id="app">',
    `<div id="app" data-server-rendered="true">${content}`,
  )

  writeFileSync(indexPath, indexOutput)

  rmdirSync(tmpDir, { recursive: true })

  console.info('🎉 Page generated!')
  process.exit()
}

main().catch((e) => {
  console.error(e)
  process.exit(-1)
})
