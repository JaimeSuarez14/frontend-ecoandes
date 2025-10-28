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
import { Popover } from "@shared/components/popover/popover";

@Component({
  selector: 'app-admin-layout',
  imports: [
    TitleCasePipe,
    RouterLink, RouterLinkActive, RouterOutlet, CommonModule, HasRold,
    Popover
],
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


  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateScreenWidth();
  }

  updateScreenWidth(): void {
    if (window.innerWidth <= 768) this.sidebarCollapsed = true;
  }
}
