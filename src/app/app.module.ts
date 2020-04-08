import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcctFormComponent } from './acct-form';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { VirtualinfoComponent } from './virtualinfo';
import { LoginComponent } from './login';
import { ProtectedComponent } from './protected';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-ui-module';
import { AppModuleMenu } from './modules/menu/app.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VirtualinfoComponent,
    LoginComponent,
    ProtectedComponent,
    AcctFormComponent
  ],
  imports: [BrowserModule, 
    FormsModule,  
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppModuleMenu,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
