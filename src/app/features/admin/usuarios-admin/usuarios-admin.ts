import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user-service';
import { Usuario } from 'app/core/model/Usuario';
import { SpinerCargando } from "@shared/components/spiner-cargando/spiner-cargando";
import { AuthService } from '@shared/services/auth-service';
import { SubtituloDashboard } from "@shared/components/subtitulo-dashboard/subtitulo-dashboard";

@Component({
  selector: 'app-usuarios-admin',
  imports: [SpinerCargando, SubtituloDashboard],
  templateUrl: './usuarios-admin.html',
  styleUrl: './usuarios-admin.css'
})
export class UsuariosAdmin implements OnInit{
  userService = inject(UserService)
  authService = inject(AuthService)

  constructor(){
  }

  ngOnInit(): void { // 👈 LLAMA AQUÍ
  }

  editarMensaje(usuario: Usuario){

  }

  eliminarMensaje(id: number)
{

}


}
