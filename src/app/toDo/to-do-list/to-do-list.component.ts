import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  newTask: string;
  tasks: any = [];

  ngOnInit(): void {
  }

 

  onAdd() {
    if (this.newTask) {
      const task = {
        completed: false,
        name: this.newTask
      }
      this.tasks.push(task);
      this.newTask="";
    }
  }

  onDelete(i) {

    this.tasks.splice(i,1);
  }

}
