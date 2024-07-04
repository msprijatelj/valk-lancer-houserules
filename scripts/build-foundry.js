// Strips items of LCP Prefix to overwrite existing lancer-data items.

import * as fs from 'fs';

const libDir = './lib'
const tmpDir = './tmp'
const manifest_fn = `${libDir}/lcp_manifest.json`
const manifest = JSON.parse(fs.readFileSync(manifest_fn).toString());
const prefix = manifest.item_prefix

const files = fs.readdirSync(libDir);
files.forEach(function(fn) {
    var items = JSON.parse(fs.readFileSync(`${libDir}/${fn}`).toString());
    if (items.constructor.name == "Array") {
        items.forEach(function(i) {
            if (i.id) {
                i.id = i.id.replace(prefix, '')
            }
        })
    }
    fs.writeFileSync(`${tmpDir}/${fn}`, JSON.stringify(items));
});

import zl from 'zip-lib';
import info from '../package.json' assert { type: 'json' };

const name = info.name.split('/').pop();

const filepath = `./dist/${name}-fvtt-${info.version}.lcp`;

zl.archiveFolder(tmpDir, filepath).then(
  function () {
    console.log('done');
  },
  function (err) {
    console.log(err);
  }
);