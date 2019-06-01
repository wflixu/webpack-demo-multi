let {SyncHook ,SyncBailHook} = require('tapable');

class Lesson {
    constructor() {
       this.hooks = {
           arch:new SyncBailHook(['name'])
       }        
    }
    tap(){
        this.hooks.arch.tap('node',function (name) {
            console.log('node',name);
            return '停止学习';
        })
        this.hooks.arch.tap('react',function (name) {
            console.log('react',name);
        });

    }
    start(){
        this.hooks.arch.call('lxddd')
    }
    
}

let lesson  = new Lesson();
lesson.tap();

lesson.start();