#! /usr/bin/env node

console.log('lx-pack start!');

// 1 拿到webpack.config.js

let path = require('path');

let config = require(path.resolve('webpack.config.js'));

let  Compiler = require('../lib/Compiler.js');
let compiler = new Compiler(config);

// 运行
compiler.run();  

