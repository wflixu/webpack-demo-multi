let {SyncHook,SyncWaterfallHook,SyncLoopHook} = require('tapable');
// let {SyncHook} = require('./hooks');

class Lesson {
    constructor() {
       this.hooks = {
           arch:new SyncWaterfallHook(['name'])
       }        
    }
    tap(){
        this.hooks.arch.tap('node',function (name) {
            console.log('node',name);
            return 'data from node'
        })
        this.hooks.arch.tap('react',function (data) {

            console.log('react',data);
        });

    }
    start(){
        this.hooks.arch.call('lxddd')
    }
    
}

let lesson  = new Lesson();
lesson.tap();
// lesson.tap('node',function(name){
//     console.log('node',name);
// });
// lesson.tap('react',function(name){
//     console.log('react',name);
// });
lesson.start();