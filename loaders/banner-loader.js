const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');
const fs = require('fs');

function loader(source){
    console.log('banner -loader ');
    this.cacheable(true);
    const options = loaderUtils.getOptions(this);
    const cb = this.async();
    let  schema = {
        type:'object',
        properties:{
            text:{
                type:'string'
            },
            template:{
                type:'string'
            }
        }
    }
    schemaUtils(schema,options,'banner-loader');

    if(options.template){
        this.addDependency(options.template);
       fs.readFile(options.template,'utf8',function(err,data){
          cb(err,`/**${data}**/${source}`);
       })
    }else{
        cb(null,`/**${options.text}**/${source}`);  
    }
    return source;
}

module.exports = loader;