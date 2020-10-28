import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';

// Modulos
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DetailModule } from './detail/detail.module';
import { SinginModule } from './singin/singin.module';
import { SingupModule } from './singup/singup.module';
import { BookingModule } from './booking/booking.module';
import { SearchModule } from './search/search.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor/auth-interceptor.service';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    DetailModule,
    SingupModule,
    SinginModule,
    BookingModule,
    SearchModule,
    HttpClientModule,
    PageNotFoundModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
