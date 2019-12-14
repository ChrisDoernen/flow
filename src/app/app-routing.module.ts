import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowsComponent } from "./components/workflows/workflows.component";
import { WorkflowComponent } from "./components/workflow/workflow.component";

const routes: Routes = [
  { path: "", redirectTo: "/workflows", pathMatch: "full" },
  { path: "workflows", component: WorkflowsComponent },
  { path: "workflow/:id", component: WorkflowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
