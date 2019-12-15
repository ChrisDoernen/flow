import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Workflow } from "src/app/entities/workflow.entity";

@Injectable({
  providedIn: "root"
})
export class WorkflowsService {

  public workflows$: ReplaySubject<Workflow[]> = new ReplaySubject();

  constructor(
    private readonly httpClient: HttpClient) {
  }

  public getWorkflows(): void {
    console.log("Getting workflows");
    this.httpClient.get<Workflow[]>("assets/data/workflows.json")
      .subscribe(workflows => this.workflows$.next(workflows));
  }

  public getWorkflow(id: string): Promise<Workflow> {
    console.log("Getting workflow with id", id);
    return this.httpClient.get<Workflow>(`assets/data/${id}.json`).toPromise();
  }
}
