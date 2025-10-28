import {
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { ConfirmacionService } from '../../services/confirmacion-service';

@Component({
  selector: 'app-alert-confirmacion',
  imports: [],
  templateUrl: './alert-confirmacion.html',
  styleUrl: './alert-confirmacion.css',
})
export class AlertConfirmacion {
  model = inject(ConfirmacionService);

  // Escucha global de la tecla Escape
  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.model.visible()) {
      this.model.cancelar();
    }
  }
}
