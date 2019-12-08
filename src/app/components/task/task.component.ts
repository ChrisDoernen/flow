import { Component, Input } from '@angular/core';
import { Task } from "src/app/entities/task.entity";

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  public task: Task;
}
