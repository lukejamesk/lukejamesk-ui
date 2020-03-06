const path = require('path')
const glob = require('glob')
const fse = require('fse')

const packagePath = process.cwd()
const srcPath = path.join(packagePath, './src')
const buildPath = path.join(packagePath, './build')

async function createModulePackages({ from, to }) {
  const directoryPackages = glob.sync('*/index.js', { cwd: from }).map(path.dirname)

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      const packageJson = {
        sideEffects: false,
      }

      const packageJsonPath = path.join(to, directoryPackage, 'package.json')
      await fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2))

      return packageJsonPath
    }),
  )
}

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8')

  const { scripts, devDependencies, workspaces, ...restPackage } = JSON.parse(packageData)

  const newPackageData = {
    ...restPackage,
    private: false,
    main: './index.js',
  }

  const targetPath = path.resolve(buildPath, './package.json')

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8')

  return newPackageData
}

async function run() {
  try {
    await createPackageFile()
    await createModulePackages({ from: srcPath, to: buildPath })
  } catch (err) {
    // console.log(err)
    process.exit(1)
  }
}
run()
