import { Component } from "@angular/core";
import { WorkflowService } from "src/app/services/workflow.service";

@Component({
  selector: "workflow",
  templateUrl: "./workflow.component.html",
  styleUrls: ["./workflow.component.scss"]
})
export class WorkflowComponent {

  public tasks$ = this.workflowService.tasks$;

  constructor(
    private readonly workflowService: WorkflowService) {
  }

}
