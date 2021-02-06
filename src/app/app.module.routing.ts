import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { AnexosComponent } from "./pages/anexos/anexos.component";
import { ConfiguracoesComponent } from "./pages/configuracoes/configuracoes.component";
import { ProcedimentosComponent } from "./pages/procedimentos/procedimentos.component";



const appRoutes: Routes = [
    { path: '', component: ProcedimentosComponent},
    { path: 'anexo', component: AnexosComponent},
    { path: 'config', component: ConfiguracoesComponent}
    //{ path: 'certs/:id', component: ExibeCertificadosComponent, canActivate:[AuthGuard] }
    
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes,{useHash: true})],
    exports: [RouterModule]

})

export class AppRoutingModule {}