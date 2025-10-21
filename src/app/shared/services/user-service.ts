import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Usuario } from 'app/core/model/Usuario';
import { catchError, finalize, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/api/user';

  private usuariosSignal = signal<Usuario[]>([]);
  private isLoadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  readonly usuarios = this.usuariosSignal.asReadonly();
  readonly isLoading = this.isLoadingSignal.asReadonly();
  readonly errorMessage = this.errorSignal.asReadonly();

  constructor(private http: HttpClient) {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.isLoadingSignal.set(true);
    this.errorSignal.set(null);

    this.http
      .get<Usuario[]>(this.apiUrl)
      .pipe(
        tap((data) => {
          if(Array.isArray(data)){
            this.usuariosSignal.set(data)
          }else{
            this.usuariosSignal.set([data])
          }
        }
          
      ),
        catchError((error) => {
          this.errorSignal.set(error?.message || 'Error al cargar usuarios');
          this.usuariosSignal.set([]);
          return of([]);
        }),
        finalize(() => this.isLoadingSignal.set(false))
      )
      .subscribe();
  }

  refrescarLista(): void {
    this.cargarUsuarios();
  }
}
