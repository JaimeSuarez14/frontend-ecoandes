import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, Home, Settings, User, Bell, FileText, Contact, Mail, TrendingUp } from 'lucide-angular';
import * as Highcharts from 'highcharts';



import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './core/interceptors/jwt-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    
    importProvidersFrom(
      LucideAngularModule.pick({ Home, Settings, User, Bell,   FileText,
        Contact,
        Mail,
        TrendingUp})
    ),
    provideHttpClient( 
      withInterceptors([jwtInterceptor]),
    ),

  ]
};
