import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Workflow } from "../../entities/workflow.entity";

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
}
