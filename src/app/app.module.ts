import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ProcedimentosComponent } from './pages/procedimentos/procedimentos.component';
import { AnexosComponent } from './pages/anexos/anexos.component';
import { AppRoutingModule } from './app.module.routing';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcedimentosComponent,
    AnexosComponent,
    ConfiguracoesComponent,
    
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
