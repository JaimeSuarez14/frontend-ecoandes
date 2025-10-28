import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  //esta clases sirve para alertas al iniciar o obtener, se muestra la primera vez que se lancen
  private marcadorVentana = signal(false);

  ventanaMarcada() {
    this.marcadorVentana.set(true);
  }

  consumoDeAlerta(): boolean {
    const valor = this.marcadorVentana();
    this.marcadorVentana.set(false);
    return valor;
  }

}
