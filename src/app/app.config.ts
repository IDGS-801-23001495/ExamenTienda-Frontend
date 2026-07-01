import { ApplicationConfig, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Reemplazamos provideZoneChangeDetection por la versión Zoneless (Experimental) para evitar el error NG0908
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
