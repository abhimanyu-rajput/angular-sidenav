import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Interceptors provider
import { interceptorProvider } from './http-interceptors';

import { LoginComponent } from './userauth/login/login.component';
import { ForgetpasswordComponent } from './userauth/forgetpassword/forgetpassword.component';
import { RegistrationComponent } from './userauth/registration/registration.component';

// Toast component

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
