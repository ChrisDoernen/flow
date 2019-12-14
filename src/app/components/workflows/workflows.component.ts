import { Component, OnInit } from '@angular/core';
import { WorkflowsService } from "src/app/services/workflows/workflows.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent {

  public workflows$ = this.workflowsService.workflows$;

  constructor(
    private readonly workflowsService: WorkflowsService) { 
  }
}
