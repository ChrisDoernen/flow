import { Component, OnInit } from "@angular/core";
import { WorkflowService } from "src/app/services/workflow/workflow.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "workflow",
  templateUrl: "./workflow.component.html",
  styleUrls: ["./workflow.component.scss"]
})
export class WorkflowComponent implements OnInit {

  public tasks$ = this.workflowService.tasks$;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly workflowService: WorkflowService) {
  }

  public ngOnInit(): void {
    const workflowId = this.activatedRoute.snapshot.params["id"];
    this.workflow = this.workflowService.getWorkflow(workflowId);
  }
}
