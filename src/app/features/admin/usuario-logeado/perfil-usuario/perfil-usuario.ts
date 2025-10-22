import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '@shared/services/auth-service';
import { UserService } from '@shared/services/user-service';
import { Usuario } from 'app/core/model/Usuario';

@Component({
  selector: 'app-perfil-usuario',
  imports: [],
  templateUrl: './perfil-usuario.html',
  styleUrl: './perfil-usuario.css'
})
export default class PerfilUsuario {
  authService = inject(AuthService);
  userService = inject(UserService);
  usuario = computed(() => {
    const username = this.authService.currentUserAuth$()?.username;
    const usuarios =  this.userService.usuarios();
    return usuarios.find( u => u.username === username)
  })

  
}
