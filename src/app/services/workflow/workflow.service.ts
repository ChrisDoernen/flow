import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Task } from "../../entities/task.entity";

@Injectable({
  providedIn: "root"
})
export class WorkflowService {

  public tasks$: ReplaySubject<Task[]> = new ReplaySubject();

  constructor(
    private readonly httpClient: HttpClient) {
  }

  public getWorkflow(id: string): void {
    console.log("Getting workflow with id", id);
    this.httpClient.get<Task[]>(`assets/data/${id}.json`)
      .subscribe(tasks => this.tasks$.next(tasks));
  }
}
