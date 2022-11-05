import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayCatComponent } from './cat/display-cat/cat.component';
import { CreateCatComponent } from './cat/create-cat/create-cat.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatExpansionModule}from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserNewUserCancelComponent } from './user/user-new-user-cancel/user-new-user-cancel.component';
import { CatVisualizeCompenentComponent } from './cat/cat-visualize-compenent/cat-visualize-compenent.component';
import { WritePostComponentComponent } from './write-post-component/write-post-component.component';
import { ViewPostComponentComponent } from './view-post-component/view-post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCatComponent,
    CreateCatComponent,
    UserLoginComponent,
    UserLogoutComponent,
    UserNewUserCancelComponent,
    CatVisualizeCompenentComponent,
    WritePostComponentComponent,
    ViewPostComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'get-cat', component: DisplayCatComponent},
      {path: 'make-cat', component: CreateCatComponent},
      {path: '', component: UserLoginComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
