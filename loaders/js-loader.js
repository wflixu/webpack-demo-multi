let babel = require('@babel/core');
let loaderUtils = require('loader-utils');


function loader(source) {

    const options = loaderUtils.getOptions(this);
    const cb = this.async();
    babel.transform(source, {
        ...options,
        sourceMap: true,
        filename:this.resourcePath.split('/').pop()
    },
    function (err, result) {
        cb(err, result.code, result.map)
    });
}

module.exports = loader;