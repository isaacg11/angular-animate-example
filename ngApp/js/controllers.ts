namespace app.Controllers {
  export class TasksController {
    public tasks;
    public newTask;

    constructor() {
      this.tasks = [
        {name: 'feed dog'},
        {name: 'water plants'},
        {name: 'code an app'}
      ];
    }

    addTask() {
      this.tasks.push({name: this.newTask});
      this.newTask = '';
    }
  }

  angular.module('app').controller('TasksController', TasksController);
}
