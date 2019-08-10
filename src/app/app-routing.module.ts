import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' },
  { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
  { path: 'escaner', loadChildren: './escaner/escaner.module#EscanerPageModule' },
  { path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
  { path: 'generar-qr', loadChildren: './generar-qr/generar-qr.module#GenerarQRPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
