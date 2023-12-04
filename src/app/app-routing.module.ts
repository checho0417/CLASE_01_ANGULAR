import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { OlvidoContrasenaComponent } from './olvido-contrasena/olvido-contrasena.component';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'olvidoContraseña',component : OlvidoContrasenaComponent},
  {path:'registrarse',component : RegistrarseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
