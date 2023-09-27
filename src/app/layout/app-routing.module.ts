import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { DefaultlayoutComponent } from "./default-layout/defaultlayout/defaultlayout.component";

const routes: Routes = [{
  path: "",
  component: DefaultlayoutComponent,
  children: [{
    path: "",
    component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }