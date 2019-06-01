 class SyncHook {
    constructor(args){
       this.tasks = [];
    }
    call(...args){
       this.tasks.forEach((task)=>{
           task(args);
       })
    }
    tap(name,task){
       this.tasks.push(task)
    }
}
exports.SyncHook = SyncHook;

class SyncBailHook {
   constructor(args){
      this.tasks = [];
   }
   call(...args){
       let res ,index=0;
      do {
         res =  this.tasks[index](...args);
         index++;

      } while (this.tasks.length<index &&res==undefined);
   }
   tap(name,task){
      this.tasks.push(task);
   }
}
exports.SyncBailHook = SyncBailHook;


// SyncWaterfallHook
class SyncWaterfallHook {
   constructor(args){
      this.tasks = [];
   }
   call(...args){
      const [first,...others] = this.tasks;

       let res = first(args);
       others.reduce((a,b)=>{
          return b(a);
       },res);
   }
   tap(name,task){
      this.tasks.push(task);
   }
}
exports.SyncWaterfallHook = SyncWaterfallHook;


// SyncLoopHook
class SyncLoopHook {
   constructor(args){
      this.tasks = [];
   }
   call(...args){
      this.tasks.forEach((task)=>{
         let ret;
         do {
            ret = task(...args);
         } while (ret!==undefined);
      })

       
   }
   tap(name,task){
      this.tasks.push(task);
   }
}
exports.SyncLoopHook = SyncLoopHook;


//异步的钩子



// AsyncParallelHook
class AsyncParallelHook {
   constructor(args){
      this.tasks = [];
   }
   callAsync(...args){
      let index =0;
      const finalCallBack = args.pop();

       const  done =  ()=>{
          index++;
          if(index == this.tasks.length){
             finalCallBack();
          }
       }
      this.tasks.forEach((task)=>{
         task(...args,done)
      }) 
   }
   tapAsync(name,task){
      this.tasks.push(task);
   }
   tapPromise(name,task){
      this.tasks.push(task);
   }
   promise(...args){
      let tasksPromise =  this.tasks.map((task)=>{
         return task(...args);
      }) 
      return Promise.all(tasksPromise);
   }
}
exports.AsyncParallelHook = AsyncParallelHook;



// AsyncSeriesHook
class AsyncSeriesHook {
   constructor(args){
      this.tasks = [];
   }
  
   tapAsync(name,task){
      this.tasks.push(task);
   }
   callAsync(...args){
      let index =0;
      const finalCallBack = args.pop();
       let  next =  ()=>{
          if(index ===this.tasks.length){
            return  finalCallBack(...args); 
          }
          let task = this.tasks[index++];
          task(...args,next);
       }
       next(...args);
     
   }
   tapPromise(name,task){
      this.tasks.push(task);
   }
   promise(...args){
      let [first,...others] = this.tasks;

      return others.reduce((a,b)=>{
        return a.then(()=>b(...args));
      }, first(...args)); 
   }
}
exports.AsyncSeriesHook = AsyncSeriesHook;




// AsyncSeriesWaterfallHook
class AsyncSeriesWaterfallHook {
   constructor(){
      this.tasks = [];
   }
  
   tapAsync(name,task){
      this.tasks.push(task);
   }
   callAsync(...args){
      let index =0;
      const finalCallBack = args.pop();
      
       let  next =  (err,data)=>{
          let task = this.tasks[index];
          if(!task){
             return finalCallBack();
          }
          if(index ===0){
             task(...args,next);
          }else{
             task(data,next);
          }
          index++;
       }
       next(...args);
     
   }
   tapPromise(name,task){
      this.tasks.push(task);
   }
   promise(...args){
      let [first,...others] = this.tasks;
      return others.reduce((a,b)=>{
        return a.then((data)=>b(data));
      }, first(...args)); 
   }
}
exports.AsyncSeriesWaterfallHook = AsyncSeriesWaterfallHook;
