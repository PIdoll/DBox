const fs = require('fs-extra');
const path = require('path');
const esDir = path.join(__dirname, '../lib');
const libDir = path.join(__dirname, '../es');
const srcDir = path.join(__dirname, '../components');

const isDir = dir => fs.lstatSync(dir).isDirectory();
const isJsx = path => /\.jsx$/.test(path);
const isCode = path => !/(demo|test|\.md)$/.test(path);

function compile(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);

    // remove unnecessary files
    if (!isCode(file)) {
      return fs.removeSync(filePath);
    }

    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }

    if (isJsx(file)) {
        const source = fs.readFileSync(filePath, 'utf-8');
        fs.removeSync(filePath);
        const jsPath = filePath.replace('.jsx', '.js');
        return fs.outputFileSync(jsPath, source);
    }
  });
}

// clear dir
fs.emptyDirSync(esDir);
// compile es dir
fs.copySync(srcDir, esDir);
fs.copySync(srcDir, libDir);
compile(esDir);
