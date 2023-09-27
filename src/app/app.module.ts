import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MoviesAwardsService } from "./shared/service/moviesawards.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { HeaderComponent } from "./layout/header/header.component";
import { AppRoutingModule } from "./layout/app-routing.module";
import { DefaultlayoutComponent } from "./layout/default-layout/defaultlayout/defaultlayout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    DefaultlayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [MoviesAwardsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
