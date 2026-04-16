import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
@Component({
 selector: 'app-inicio',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './inicio.component.html'
})
export class InicioComponent {
 constructor(private auth: AuthService, private router: Router) {}
 irAProductos() {
 this.router.navigate(['/productos']);
 }
 cerrar() {
 this.auth.cerrarSession();
 this.router.navigate(['/login']);
 }
}