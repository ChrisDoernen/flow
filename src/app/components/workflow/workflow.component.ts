import { Component, OnInit } from "@angular/core";
import { WorkflowsService } from "src/app/services/workflows/workflows.service";
import { ActivatedRoute } from "@angular/router";
import { Workflow } from "src/app/entities/workflow.entity";

@Component({
  selector: "workflow",
  templateUrl: "./workflow.component.html",
  styleUrls: ["./workflow.component.scss"]
})
export class WorkflowComponent implements OnInit {

  public workflow: Workflow;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly workflowsService: WorkflowsService) {
  }

  public ngOnInit(): void {
    const workflowId = this.activatedRoute.snapshot.paramMap.get("id");
    this.workflowsService.getWorkflow(workflowId).then((workflow) => this.workflow = workflow);
  }
}
