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
import { WorkflowsService } from "./services/workflows/workflows.service";
import { LogoComponent } from './components/logo/logo.component';
import { InlineSVGModule } from "ng-inline-svg";
import { WorkflowsComponent } from './components/workflows/workflows.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent,
    TaskComponent,
    StatusComponent,
    ClockComponent,
    LogoComponent,
    WorkflowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    InlineSVGModule.forRoot()
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: (workflowsService: WorkflowsService) => {
        return () => workflowsService.getWorkflows();
      },
      deps: [WorkflowsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
