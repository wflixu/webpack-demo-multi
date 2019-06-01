const { SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncSeriesHook,
    AsyncSeriesWaterfallHook } = require('./hooks');

// class Lesson {
//     constructor() {
//        this.hooks = {
//            arch:new SyncHook(['name'])
//        }        
//     }
//     start(){
//         this.hooks.arch.call('lxddd')
//     }

// }
// const syncHook  = new SyncHook(['name']);
// syncHook.tap('node',function(name){
//     console.log('node',name);
// });
// syncHook.tap('react',function(name){
//     console.log('react',name);
// });
// syncHook.call('my name');



// const syncBailHook  = new SyncBailHook(['name']);
// syncBailHook.tap('node',function(name){
//     console.log('node',name);
//     return 'stop';
// });
// syncBailHook.tap('react',function(name){
//     console.log('react',name);
// });
// syncBailHook.call('syncBailHook');


// const syncWaterfallHook  = new SyncWaterfallHook(['name']);
// syncWaterfallHook.tap('node',function(name){
//     console.log('node',name);
//     return 'ndoe ook';
// });
// syncWaterfallHook.tap('react',function(data){

//     console.log('react',data);
//     return 'react ok';
// });
// syncWaterfallHook.tap('webpack',function(data){
//     console.log('webpack',data);
//     return 'webpack ok !';
// });
// syncWaterfallHook.call('syncWaterfallHook');



// const syncLoopHook = new SyncLoopHook(['name']);

// let total = 0;
// syncLoopHook.tap('node', function (name) {
//     console.log('node', name);
//     return ++total == 3?undefined :'继续学';
// });
// syncLoopHook.tap('react', function (data) {
//     console.log('react', data);
// });
// syncLoopHook.tap('webpack', function (data) {
//     console.log('webpack', data);
// });
// syncLoopHook.call('syncLoopHook');


//

// const asyncParallelHook = new AsyncParallelHook(['name']);

// let total = 0;
// asyncParallelHook.tapAsync('node', function (name,cb) {
//     setTimeout(() => {
//         console.log('node', name);
//         cb();
//     }, 1000);
// });
// asyncParallelHook.tapAsync('react', function (name,cb) {
//     setTimeout(() => {
//         console.log('react', name);
//         cb();
//     }, 1000);
// });

// asyncParallelHook.callAsync('syncLoopHook',function (params) {
//     console.log('end');

// });

// //promise
// const asyncParallelHook = new AsyncParallelHook(['name']);

// asyncParallelHook.tapPromise('node', function (name, cb) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('node', name);
//             resolve();
//         }, 1000);
//     })
   
// });

// asyncParallelHook.tapPromise('react', function (name, cb) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('react', name);
//             resolve();
//         }, 1000);
//     })
   
// });



// asyncParallelHook.promise('asyncParallelHook').then(function () {
//     console.log('end');
// });


//AsyncSeriesHook
// const asyncSeriesHook = new AsyncSeriesHook(['name']);

// asyncSeriesHook.tapAsync('node', function (name,cb) {
//     setTimeout(() => {
//         console.log('node', name);
//         cb();
//     }, 1000);
// });
// asyncSeriesHook.tapAsync('react', function (name,cb) {
//     setTimeout(() => {
//         console.log('react', name);
//         cb();
//     }, 1000);
// });

// asyncSeriesHook.callAsync('asyncSeriesHook',function (params) {
//     console.log('end');
// });





// asyncSeriesHook.tapPromise('node', function (name) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('node', name);
//             resolve();
//         }, 1000);
//     })
   
// });

// asyncSeriesHook.tapPromise('react', function (name) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('react', name);
//             resolve();
//         }, 1000);
//     })
   
// });



// asyncSeriesHook.promise('asyncSeriesHook').then(function () {
//     console.log('end');
// });





//AsyncSeriesHook
const asyncSeriesWaterfallHook = new AsyncSeriesWaterfallHook(['name']);

// asyncSeriesWaterfallHook.tapAsync('node', function (name,cb) {
//     setTimeout(() => {
//         console.log('node', name);
//         cb(null,'node result');
//     }, 1000);
// });
// asyncSeriesWaterfallHook.tapAsync('react', function (data,cb) {
//     setTimeout(() => {
//         console.log('react', data);
//         cb();
//     }, 1000);
// });

// asyncSeriesWaterfallHook.callAsync('asyncSeriesWaterfallHook',function (params) {
//     console.log('end');
// });





asyncSeriesWaterfallHook.tapPromise('node', function (name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('node', name);
            resolve('node data');
        }, 1000);
    })
   
});

asyncSeriesWaterfallHook.tapPromise('react', function (name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('react', name);
            resolve('react data');
        }, 1000);
    })
   
});

asyncSeriesWaterfallHook.promise('asyncSeriesWaterfallHook start').then(function (data) {
    console.log('end',data);
});