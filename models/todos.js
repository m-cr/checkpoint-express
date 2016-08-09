'use strict';

var tasks = {

//zeke : [ {},{} ]

}; // a place to store tasks by person

module.exports = {
  reset: function () {
    tasks = {}; // (this function is completed for you.)
  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    var ar = [];
    for(var key in tasks){
      ar.push(key);
    }
    return ar;
    // returns an array of all people for whom tasks exist
  },
  add: function (name, task) {
    task.complete = false;
    if(!tasks[name])
      tasks[name] = [task];
    else
      tasks[name].push(task);

    // saves a task for a given person
  },
  list: function(name){
    return tasks[name];
  },
  complete: function(name, taskIdx){
    //complete('zeke', )
    tasks[name][taskIdx].complete = true;
  },
  remove: function(name, taskIdx){
    tasks[name].splice(taskIdx, 1);
  }
};
