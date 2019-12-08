import { HttpClientModule } from "@angular/common/http";
import { APP_BOOTSTRAP_LISTENER, NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClockComponent } from "./components/clock/clock.component";
import { StatusComponent } from "./components/status/status.component";
import { TaskComponent } from "./components/task/task.component";
import { WorkflowComponent } from "./components/workflow/workflow.component";
import { WorkflowService } from "./services/workflow.service";

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    TaskComponent,
    StatusComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: (workflowService: WorkflowService) => {
        return () => workflowService.getWorkflow();
      },
      deps: [WorkflowService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
