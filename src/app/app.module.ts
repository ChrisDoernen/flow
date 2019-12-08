import { HttpClientModule } from "@angular/common/http";
import { APP_BOOTSTRAP_LISTENER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorkflowComponent } from "./components/workflow/workflow.component";
import { WorkflowService } from "./services/workflow.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
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
