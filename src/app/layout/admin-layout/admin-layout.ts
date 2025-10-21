import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { AuthService } from '@shared/services/auth-service';
import { HasRold } from 'app/core/directives/has-rold';

@Component({
  selector: 'app-admin-layout',
  imports: [
    TitleCasePipe,
    RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HasRold],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  authService = inject(AuthService);
  sidebarCollapsed = false;
  router = inject(Router);
  screenWidth = 0;

  ngOnInit(): void {
    this.updateScreenWidth();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  getPageTitle(): string {
    const url = this.router.url;
    const titles: { [key: string]: string } = {
      '/admin/usuarios': 'Usuarios',
      '/admin/consultas': 'Consultas',
      '/admin/mensajes': 'Mensajes',
      '/admin/productos': 'Productos',
      '/admin/configuracion': 'Configuración',
    };
    return titles[url] || 'Administración';
  }

  logout(): void {
    console.log('cerrar sesion');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateScreenWidth();
  }

  updateScreenWidth(): void {
    if (window.innerWidth <= 768) this.sidebarCollapsed = true;
  }
}
