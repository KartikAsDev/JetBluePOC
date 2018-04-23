import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { LoginService } from './login.service';
import { DashboardService } from './dashboard.service';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDetailsComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    NavComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'register',
        component: MyDetailsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'searchResults',
        component: SearchResultsComponent
      }
    ])
  ],
  providers: [ LoginService, DashboardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
